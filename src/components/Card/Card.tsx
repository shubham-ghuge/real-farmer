import banner from "../../assets/quiz-banner.png";
import "./Card.css";
import { ReactChild } from "react";
export default function Card({ children }: { children: ReactChild[] }) {
  return (
    <figure className="quiz-card">
      <img src={banner} alt="quiz banner" />
      <figcaption className="details">{children}</figcaption>
    </figure>
  );
}
