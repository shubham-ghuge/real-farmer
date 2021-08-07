import "./Question.css";
import "../utils.css";
import { OptionType } from "../../data/quizData.types";
import { useQuizContext } from "../../contexts/QuizContext";
import { useEffect, useState } from "react";

type QuestionPropType = {
  question: string;
  options: OptionType[];
};

export default function Question({ question, options }: QuestionPropType) {
  const {
    initialState: { currentQuestion, quizQuestions },
    dispatch,
  } = useQuizContext();

  const [disableState, setDisableState] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(4).fill(false));

  useEffect(() => {
    setDisableState(false);
    setCheckedState((current) => current.map((i) => false));
  }, [currentQuestion]);

  function markAnswer(optionIndex: number) {
    setDisableState(true);
    setCheckedState((current) =>
      current.map((i, idx) => idx === optionIndex && true)
    );
    return dispatch({
      type: "MARK_ANSWER",
      payload: {
        currentQuestionIndex: currentQuestion,
        optionIndex,
      },
    });
  }

  function submitResult() {
    dispatch({
      type: "CHANGE_QUESTION",
      payload: { questionIndex: currentQuestion },
    });
  }

  return (
    <div className="question">
      <h2>{`${currentQuestion + 1}. ${question}`}</h2>
      <div className="flex-column my-4">
        {options.map((i, idx) => (
          <label
            className={`option ${disableState ? "not-allowed" : ""}`}
            htmlFor={`${currentQuestion.toString()}option-${idx.toString()}`}
            key={idx}
          >
            <input
              className={`${disableState ? "not-allowed" : ""}`}
              disabled={disableState}
              checked={checkedState[idx]}
              type="radio"
              name={`question-${currentQuestion.toString()}`}
              onChange={() => markAnswer(idx)}
              id={`${currentQuestion.toString()}option-${idx.toString()}`}
            />
            {i.text}
          </label>
        ))}
      </div>
      <div className="d-flex jc-end">
        {currentQuestion === quizQuestions.length - 1 ? (
          <button className="btn-success" onClick={submitResult}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.8388 6.69459L8.81799 18.7154L3.16113 13.0586L4.57113 11.6486L8.81799 15.8854L19.4288 5.28459L20.8388 6.69459Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        ) : (
          <button
            className="btn-success cta"
            onClick={() =>
              dispatch({
                type: "CHANGE_QUESTION",
                payload: { questionIndex: currentQuestion },
              })
            }
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18.17 13L15.59 15.59L17 17L22 12L17 7L15.59 8.41L18.17 11H2V13H18.17Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
