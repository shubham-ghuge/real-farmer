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
      setLoading(true);
      const { quiz } = await getQuizData(quizId);
      dispatch({ type: "SET_QUIZ", payload: { data: quiz?.questions } });
      return setLoading(false);
    }
    getData();
  }, []);

  return (
    <section>
      {loading && (
        <div className="d-flex h-90 jc-center ai-center">
          <Loader color="c-primary p-4" />
        </div>
      )}
      {currentQuestion < quizQuestions.length ? (
        <div className="quiz container">
          <Question
            question={quizQuestions[currentQuestion].text}
            options={quizQuestions[currentQuestion].options}
          />
        </div>
      ) : (
        <Result />
      )}
    </section>
  );
}
