import { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import { Loader } from "../components/Icons";
import { getQuizInitialData } from "../services/quizData.service";

export default function Dashboard() {
  const [data, setData] = useState<QuizNameAndID>();
  const [loading, setLoading] = useState(false);
  type QuizNameAndID = [{ name: string; id: string }];

  useEffect(() => {
    async function test() {
      setLoading(true);
      const { listOfQuizzes } = await getQuizInitialData();
      setData(listOfQuizzes as unknown as QuizNameAndID);
      return setLoading(false);
    }
    test();
  }, []);
  
  return (
    <section className="quiz-grid container">
      <h3 className="heading">Welcome Back, User !</h3>
      <div className="flex-layout">
        {loading ? (
          <Loader color="text-primary" />
        ) : (
          data &&
          data.map((i) => <Card quizId={i.id} name={i.name} key={i.id} />)
        )}
      </div>
    </section>
  );
}
