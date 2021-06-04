import banner from "../../assets/quiz-banner.png";
import "./Card.css";
import { Link } from "react-router-dom";
export default function Card() {
  return (
    <figure className="quiz-card">
      <img src={banner} alt="quiz banner" />
      <figcaption className="details">
        <h3>Plant Breeding and Genetics</h3>
        <Link to="/quiz/1" className="cta btn-primary">
          Start Quiz
        </Link>
      </figcaption>
    </figure>
  );
}
