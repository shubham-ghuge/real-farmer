import "./Question.css";
import { OptionType } from "../../data/quizData.types";
import { useQuizContext } from "../../contexts/QuizContext";
import { useEffect, useState } from "react";

type QuestionPropType = {
  question: string;
  options: OptionType[];
};

function Question({ question, options }: QuestionPropType) {
  const {
    initialState: { currentQuestion },
    dispatch,
  } = useQuizContext();
  const [disableState, setDisableState] = useState(false);

  useEffect(() => {
    setDisableState(false);
  }, [currentQuestion]);

  function markAnswer(optionIndex: number) {
    setDisableState(true);
    return dispatch({
      type: "MARK_ANSWER",
      payload: {
        currentQuestionIndex: currentQuestion,
        optionIndex,
      },
    });
  }
  return (
    <div className="question">
      <h2>{question}</h2>
      <div className="flex-column my-4">
        {options.map((i, idx) => (
          <label
            style={disableState ? { cursor: "not-allowed" } : {}}
            className="option"
            htmlFor={`${currentQuestion.toString()}option-${idx.toString()}`}
            key={idx}
          >
            <input
              disabled={disableState}
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
        <button
          className={`btn-success cta mx-3 ${
            currentQuestion === 0 && "btn-disabled"
          }`}
          onClick={() =>
            dispatch({
              type: "CHANGE_QUESTION",
              payload: {
                questionIndex: currentQuestion,
                userAction: "prev",
              },
            })
          }
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5.83 11L8.41 8.41L7 7L2 12L7 17L8.41 15.59L5.83 13H22V11H5.83Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          className="btn-success cta"
          onClick={() =>
            dispatch({
              type: "CHANGE_QUESTION",
              payload: { questionIndex: currentQuestion, userAction: "next" },
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
      </div>
    </div>
  );
}
export default Question;
