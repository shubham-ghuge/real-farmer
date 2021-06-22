import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";
import { Loader } from "../components/Icons";
import { getUserQuizResult } from "../services/user.service";

function UserQuizzes() {
  type AttemptedQuizzes = { name: string; score: number };
  const [data, setData] = useState<AttemptedQuizzes[]>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const { quizCertificateData } = await getUserQuizResult();
      if (quizCertificateData) {
        setData(quizCertificateData);
      }
      return setLoading(false);
    }
    getData();
  }, []);
  return (
    <div className="quiz-grid container">
      <h2 className="heading">Your Quizzes</h2>
      <div className="flex-layout">
        {loading && <Loader color="c-primary p-4" />}
        {data === undefined ? (
          <h2 className="heading">You haven't attempted any quizzes</h2>
        ) : (
          data.map((i, idx) => (
            <Card key={idx}>
              <h3>{i.name}</h3>
              <Link to={`/certificates`} className="cta btn-primary">
                View Certificate
              </Link>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
export default UserQuizzes;
