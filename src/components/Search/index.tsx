import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getQuizInitialData } from "../../services/quizData.service";
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
  console.log(result);
  return (
    <div className="search-container" onClick={() => onClose()}>
      <div className="p-7" onClick={(e) => e.stopPropagation()}>
        <input
          placeholder="Explore Quizzes &amp; More"
          ref={inputRef}
          onChange={searchQuiz}
          required
        />
        <ul className="list">
          {result && result.length !== 0 ? (
            result.map((i) => (
              <li className="list-item" key={i.id} onClick={() => onClose()}>
                <Link to={`/quiz/${i.id}`}>{i.name}</Link>
              </li>
            ))
          ) : (
            <h2 className="c-primary bgc-base-100 p-2 bdrs-1">data not found</h2>
          )}
        </ul>
      </div>
    </div>
  );
}
export default Search;
