import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Loader } from "../components/Icons";
import Question from "../components/Quiz/Question";
import Result from "../components/Quiz/Result";
import { useQuizContext } from "../contexts/QuizContext";
import { getQuizData } from "../services/quizData.service";

export default function Quiz() {
  const { quizId } = useParams();
  const [loading, setLoading] = useState(false);
  const {
    initialState: { quizQuestions, currentQuestion },
    dispatch,
  } = useQuizContext();
  useEffect(() => {
    async function getData() {
      setLoading(false);
      const { quiz } = await getQuizData(quizId);
      dispatch({ type: "SET_QUIZ", payload: { data: quiz?.questions } });
      return setLoading(false);
    }
    getData();
  }, []);

  return (
    <section className="quiz">
      {loading && <Loader color="c-primary" />}
      {currentQuestion < quizQuestions.length ? (
        <div className="container">
          <Question
            question={quizQuestions[currentQuestion].text}
            options={quizQuestions[currentQuestion].options}
          />
        </div>
      ) : (
        <>
          <Result />
        </>
      )}
    </section>
  );
}
