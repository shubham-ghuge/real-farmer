import { useState } from "react";
import { Link } from "react-router-dom";
import certficateIcon from "../assets/certificate-icon.svg";
import { QuizCertificate } from "../components/Certificate";

export default function Certificate() {
  const [showCertificate, setShowCertificate] = useState(false);
  return (
    <section className="container">
      <button
        className="btn-primary"
        onClick={() => setShowCertificate((curr) => !curr)}
      >
        show
      </button>
      {showCertificate ? (
        <QuizCertificate />
      ) : (
        <div className="jumbotron">
          <div className="content">
            <h2 className="heading mb-3">Your Certificates</h2>
            <p className="jumbotron-description">
              Your certificates will appear here.
            </p>
            <img src={certficateIcon} className="icon-lg" alt="certificate icon" />
            <p className="my-4">
              Don’t have a certificate yet? Complete a quiz now to earn your
              first certificate.
            </p>
            <Link to="/dashboard" className="btn-outline-base cta">
              Explore Quizzes
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
