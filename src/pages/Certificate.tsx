import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import certficateIcon from "../assets/certificate-icon.svg";
import { QuizCertificate } from "../components/QuizCertificate";
import { getUserQuizResult } from "../services/user.service";
import { Loader } from "../components/Icons";

export default function Certificate() {
  type certificateType = {
    name: string;
    score: number;
  };
  const [loading, setLoading] = useState(false);
  const [certificateData, setCertificateData] = useState<certificateType[]>();
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const { quizCertificateData } = await getUserQuizResult();
      if (quizCertificateData) {
        setCertificateData(quizCertificateData);
      }
      return setLoading(false);
    }
    getData();
  }, []);
  return (
    <section className="container">
      {loading && (
        <div className="d-flex jc-center ai-center">
          <Loader color="c-primary p-4" />
        </div>
      )}
      {certificateData && certificateData.length === 0 ? (
        <div className="jumbotron">
          <div className="content">
            <h2 className="heading mb-3">Your Certificates</h2>
            <p className="jumbotron-description">
              Your certificates will appear here.
            </p>
            <img
              src={certficateIcon}
              className="icon-lg"
              alt="certificate icon"
            />
            <p className="my-4">
              Don’t have a certificate yet? Complete a quiz now to earn your
              first certificate.
            </p>
            <Link to="/dashboard" className="btn-outline-base cta">
              Explore Quizzes
            </Link>
          </div>
        </div>
      ) : (
        certificateData?.map((i) => (
          <QuizCertificate name={i.name} score={i.score} key={Date.now()} />
        ))
      )}
    </section>
  );
}
