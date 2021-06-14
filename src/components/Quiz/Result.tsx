import { Link } from "react-router-dom";
import { useQuizContext } from "../../contexts/QuizContext";

export default function Result() {
  const {
    initialState: { userAnswers, quizQuestions },
  } = useQuizContext();

  const questionCopy = quizQuestions;

  userAnswers.map((item) => {
    return (questionCopy[item.question].options[item.answer].isSelected = true);
  });

  return (
    <div className="result">
      <Link to="/dashboard" className="btn-primary cta m-4 mb-0">
        Get Your Certificate
      </Link>
      <div className="quiz-stats">
        <div className="grid-item one">
          <h2>Your Score:</h2>
          <div className="score">
            <span className="count"> 80% </span>
          </div>
          <p className="markers">selected Question</p>
          <p className="markers">correct answer</p>
        </div>
        <div>
          <div className="grid-item cube">
            <h2>Total Questions:</h2>
            <span className="count">50</span>
          </div>
          <div className="grid-item cube">
            <h2>Correct Answers:</h2>
            <span className="count">30</span>
          </div>
        </div>
      </div>
      {questionCopy.map((question, index) => {
        return (
          <div className="mb-4" key={index}>
            <h2 className="mb-4">
              {index + 1}. {question.text}
            </h2>
            <div className="flex-column">
              {question.options.map((option, idx) => (
                <label
                  key={idx.toString()}
                  className={`option ${option.isRight ? "correct" : ""} ${
                    option.isSelected !== undefined ? "chosen" : ""
                  }`}
                >
                  {option.text}
                </label>
              ))}
              {question.note && (
                <p className="note d-flex ai-start">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="mx-2"
                    fill="none"
                  >
                    <path
                      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM14 17H11V13H10V11H13V15H14V17ZM13 9H11V7H13V9Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  {question.note}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
/***
 * [
 * {question:1,answer:1},
 * {question:2,answer:1}}
 * ]
 *
 */
