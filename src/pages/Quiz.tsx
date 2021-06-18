import { useEffect } from "react";
import { useParams } from "react-router";
import Question from "../components/Quiz/Question";
import Result from "../components/Quiz/Result";
import { useQuizContext } from "../contexts/QuizContext";
import { getQuizData } from "../services/quizData.service";

export default function Quiz() {
  const { quizId } = useParams();
  const {
    initialState: { quizQuestions, currentQuestion },
    dispatch,
  } = useQuizContext();
  useEffect(() => {
    async function getData() {
      const { quiz } = await getQuizData(quizId);
      dispatch({ type: "SET_QUIZ", payload: { data: quiz?.questions } });
    }
    getData();
  }, []);

  return (
    <section className="quiz">
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
