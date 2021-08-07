import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import PrimaryHeader from "../components/Header/PrimaryHeader";
import { Loader } from "../components/Icons";
import Question from "../components/Quiz/Question";
import { useQuizContext } from "../contexts/QuizContext";
import { getQuizData } from "../services/quizData.service";

function Quiz() {
  const { quizId } = useParams();
  const [loading, setLoading] = useState(false);

  const {
    initialState: { quizQuestions, currentQuestion },
    dispatch,
  } = useQuizContext();

  async function getData() {
    setLoading(true);
    const { quiz } = await getQuizData(quizId);
    dispatch({ type: "SET_QUIZ", payload: { data: quiz?.questions } });
    return setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  if (quizQuestions === undefined) {
    return <h2>Error while fetching</h2>;
  }
  if (currentQuestion === quizQuestions.length && quizQuestions.length !== 0) {
    return <Navigate state={{ from: quizId }} replace to="/result" />;
  }
  return (
    <>
      <PrimaryHeader show={false} />
      <section>
        {quizQuestions.length === 0 && loading ? (
          <div className="d-flex h-90 jc-center ai-center">
            <Loader color="c-primary p-4" />
          </div>
        ) : (
          currentQuestion < quizQuestions.length && (
            <div className="quiz h-80 jc-center ai-center container">
              <Question
                question={quizQuestions[currentQuestion].text}
                options={quizQuestions[currentQuestion].options}
              />
            </div>
          )
        )}
      </section>
    </>
  );
}
export { Quiz };
