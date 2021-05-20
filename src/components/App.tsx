import "./App.css";
import { useReducer } from "react";
import { quizData } from "../data/quizData";
import { Option, Question } from "../data/quizData.types";
import { initialState, scoreReducer } from "../reducer/scoreReducer";

function App() {
  const [state, dispatch] = useReducer(scoreReducer, initialState);
  return (
    <div className="App">
      <h1 className="text-center">Score : {state.score}</h1>
      {quizData.question.map((question: Question, idx) => (
        <div key={idx}>
          <p>{question.text}</p>
          <ul className="list">
            {question.options.map((j: Option, index) => (
              <li className="list-item" key={index}>
                <input
                  onChange={() =>
                    j.isRight
                      ? dispatch({
                          type: "INCREMENT_SCORE",
                          payload: { score: question.points, id: "1" },
                        })
                      : dispatch({
                          type: "DECREMENT_SCORE",
                          payload: { score: question.points, id: "1" },
                        })
                  }
                  type="radio"
                  name={`${idx}`}
                />
                <label>{j.text}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
