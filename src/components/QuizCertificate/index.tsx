import "./certificate.css";
import * as htmlToImage from "html-to-image";
import logo from "../../assets/logo.svg";
import download from "downloadjs";

function QuizCertificate({ name, score }: { name: string; score: number }) {
  const onButtonClick = () => {
    var domElement = document.getElementById("certificateDom");
    if(domElement)
      htmlToImage
        .toPng(domElement)
        .then(function (dataUrl) {
          download(dataUrl, "certificate.png");
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
  };
  return (
    <>
      <button className="pos-top-right btn-primary" onClick={onButtonClick}>
        download certificate
      </button>

      <div className="quiz-certificate" id="certificateDom">
        <div className="header">
          <img src={logo} alt="real farmer logo" />
          Real Farmer
        </div>
        <div className="main">
          This certifies that
          <span>{name}</span>
          has successfully completed the quiz on realfarmer platform with score
          {score}%.
        </div>
        <div className="footer">
          Verify this certification at
          https://realfarmer-quiz.netlify.app/certification/user/quizId
        </div>
      </div>
    </>
  );
}
export { QuizCertificate };
