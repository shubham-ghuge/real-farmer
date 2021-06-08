import Question from "../components/Quiz/Question";
import Result from "../components/Quiz/Result";
import { useQuizContext } from "../contexts/QuizContext";

export default function Quiz() {
  const {
    initialState: { quizQuestions, currentQuestion, score },
  } = useQuizContext();
  return (
    <section className="container d-flex jc-center">
      <div className="quiz">
        {currentQuestion < quizQuestions.length ? (
          <Question
            question={quizQuestions[currentQuestion].text}
            options={quizQuestions[currentQuestion].options}
          />
        ) : (
          <>
            <h2 className="mb-4">Quiz Ended with score {score}</h2>
            <Result />
          </>
        )}
      </div>
    </section>
  );
}
