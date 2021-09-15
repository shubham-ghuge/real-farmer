import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PrimaryHeader from "../components/Header/PrimaryHeader";
import { Loader } from "../components/Icons";
import { QuizCertificate } from "../components/QuizCertificate";
import { CertificateValidation } from "../data/quizData.types";
import { validateUserCertificates } from "../services/user.service";

function CertificateValidate() {
  const { email } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CertificateValidation>();

  async function getData() {
    setLoading(true);
    const response = await validateUserCertificates(email);
    if (response) {
      setData(response);
    }
    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <PrimaryHeader />
      <div className="flex-column ai-center container">
        <h2 className="heading mb-4">{data && data.name} Certificates</h2>
        {loading ? (
          <Loader />
        ) : (
          data?.quizCertificateData &&
          data.quizCertificateData.map(
            (i: { name: string; score: number }, idx: number) => {
              const uName = data.name;
              const uEmail = email;
              return (
                <div className="mt-5" key={idx}>
                  <QuizCertificate
                    email={uEmail}
                    name={i.name}
                    score={i.score}
                    show={false}
                    userName={uName}
                  />
                </div>
              );
            }
          )
        )}
        {!data?.quizCertificateData && (
          <h2 className="heading">no records found</h2>
        )}
      </div>
    </>
  );
}
export { CertificateValidate };
