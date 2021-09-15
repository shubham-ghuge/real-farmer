import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getQuizInitialData } from "../../services/quizData.service";
import { Close } from "../Icons";
import "./Search.css";
function Search({ onClose }: { onClose: Function }) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  const [data, setData] = useState<{ name: string; id: string }[]>();
  const [result, setResult] = useState<{ name: string; id: string }[]>();
  useEffect(() => {
    async function getData() {
      const { listOfQuizzes } = await getQuizInitialData();
      if (listOfQuizzes) {
        setData(listOfQuizzes);
      }
    }
    getData();
  }, []);
  function searchQuiz() {
    if (data) {
      const result = data.filter(
        (i) =>
          i.name
            .toLowerCase()
            .includes(inputRef.current!.value.toLowerCase()) && i
      );
      setResult(result);
    }
  }
  return (
    <div className="search-container" onClick={() => onClose()}>
      <span className="close c-primary bgc-base-100 fsz-2 px-1 bdrs-1" onClick={() => onClose()}>
        <Close />
      </span>
      <div onClick={(e) => e.stopPropagation()}>
        <input
          placeholder="Explore Quizzes &amp; More"
          ref={inputRef}
          onChange={searchQuiz}
          required
        />
        <ul className="list">
          {result && result.length !== 0 ? (
            result.map((i) => (
              <li className="list-item mb-3" key={i.id} onClick={() => onClose()}>
                <Link to={`/quiz/${i.id}`}>{i.name}</Link>
              </li>
            ))
          ) : (
            <h4 className="c-primary bgc-base-100 p-2 bdrs-1">
              no search results
            </h4>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Search;
