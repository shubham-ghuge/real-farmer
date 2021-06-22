import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import { Loader } from "../components/Icons";
import { useAuthContext } from "../contexts/AuthContext";
import { useQuizContext } from "../contexts/QuizContext";
import { getQuizInitialData } from "../services/quizData.service";

export default function Dashboard() {
  const { dispatch } = useQuizContext();
  const { name } = useAuthContext();
  type QuizNameAndID = { name: string; id: string };
  const [data, setData] = useState<QuizNameAndID[]>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    return dispatch({ type: "RESET_QUIZ" });
  }, [dispatch]);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const { listOfQuizzes } = await getQuizInitialData();
      listOfQuizzes && setData(listOfQuizzes);
      return setLoading(false);
    }
    getData();
  }, []);
  return (
    <section className="quiz-grid container">
      <h3 className="heading">Welcome Back, {name} !</h3>
      <div className="flex-layout">
        {loading ? (
          <Loader color="c-primary p-4" />
        ) : (
          data &&
          data.map((i) => (
            <Card key={i.id}>
              <h3>{i.name}</h3>
              <Link to={`/quiz/${i.id}`} className="cta btn-primary">
                Start Quiz
              </Link>
            </Card>
          ))
        )}
      </div>
    </section>
  );
}
