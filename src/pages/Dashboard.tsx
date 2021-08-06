import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import { Loader } from "../components/Icons";
import { useAuthContext } from "../contexts/AuthContext";
import { useQuizContext } from "../contexts/QuizContext";

export default function Dashboard() {
  
  const {
    dispatch,
    initialState: { loading, quizData },
  } = useQuizContext();
  const { name } = useAuthContext();
  useEffect(() => {
    return dispatch({ type: "RESET_QUIZ" });
  }, [dispatch]);

  return (
    <section className="quiz-grid container">
      <h3 className="heading">Welcome Back, {name} !</h3>
      <div className="flex-layout">
        {loading ? (
          <Loader color="c-primary p-4" />
        ) : (
          quizData &&
          quizData.map((i) => (
            <Link to={`/quiz/${i.id}`} key={i.id}>
              <Card>
                <h3 className="c-primary">{i.name}</h3>
                <button className="cta btn-primary">Start Quiz</button>
              </Card>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
