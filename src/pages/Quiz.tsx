import Question from "../components/Quiz/Question";
import Result from "../components/Quiz/Result";
import { useQuizContext } from "../contexts/QuizContext";

export default function Quiz() {
  const {
    initialState: { quizQuestions, currentQuestion },
  } = useQuizContext();

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
