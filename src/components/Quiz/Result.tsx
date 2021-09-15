import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuizContext } from "../../contexts/QuizContext";
import { postQuizResult } from "../../services/user.service";

export default function Result() {
  const { state }: any = useLocation();
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const {
    initialState: { userAnswers, quizQuestions, score },
    dispatch,
  } = useQuizContext();
  let navigate = useNavigate();
  const questionCopy = quizQuestions;

  async function postResult(quizId: string) {
    await postQuizResult((score / (quizQuestions.length * 5)) * 100, quizId);
  }

  useEffect(() => {
    postResult(state.from);
  }, []);

  userAnswers.map((item) => {
    return (questionCopy[item.question].options[item.answer].isSelected = true);
  });

  useEffect(() => {
    userAnswers.map(
      (item) =>
        questionCopy[item.question].options[item.answer].isRight &&
        setCorrectAnswers((curr) => curr + 1)
    );
  }, []);

  function resetQuiz() {
    dispatch({ type: "RESET_QUIZ" });
    return navigate("/certificates");
  }

  return (
    <div className="result">
      <button onClick={resetQuiz} className="btn-primary cta p-4 m-4 mb-0">
        Get Your Certificate
      </button>
      <div className="quiz-stats">
        <div className="grid-item one">
          <h2>Your Score:</h2>
          <div className="score">
            <span className="count">
              {((score / (quizQuestions.length * 5)) * 100).toFixed(0)}%
            </span>
          </div>
          <p className="markers">selected Option</p>
          <p className="markers">correct Option</p>
        </div>
        <div>
          <div className="grid-item cube">
            <h2>Correct Answers:</h2>
            <span className="count">{correctAnswers}</span>
          </div>
          <div className="grid-item cube">
            <h2>Attempted:</h2>
            <span className="count">
              {userAnswers.length}/{quizQuestions.length}
            </span>
          </div>
        </div>
      </div>
      {questionCopy.map((question, index) => {
        return (
          <div className="mb-4" key={index}>
            <h2 className="mb-4 fsz-1" style={{ fontWeight: 600 }}>
              {index + 1}. {question.text}
            </h2>
            <div className="flex-column">
              {question.options.map((option, idx) => {
                return (
                  <label
                    key={idx.toString()}
                    className={`option ${option.isRight ? "correct" : ""} ${
                      option.isSelected !== undefined ? "chosen" : ""
                    }`}
                  >
                    {option.text}
                  </label>
                );
              })}
              {question.note && (
                <p className="note d-flex ai-start">note: {question.note}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
