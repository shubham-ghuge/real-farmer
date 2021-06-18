import banner from "../../assets/quiz-banner.png";
import "./Card.css";
import { Link } from "react-router-dom";
export default function Card({
  name,
  quizId,
}: {
  name: string;
  quizId: string;
}) {
  return (
    <figure className="quiz-card">
      <img src={banner} alt="quiz banner" />
      <figcaption className="details">
        <h3>{name}</h3>
        <Link to={`/quiz/${quizId}`} className="cta btn-primary">
          Start Quiz
        </Link>
      </figcaption>
    </figure>
  );
}
