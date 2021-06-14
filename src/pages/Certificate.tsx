import { Link } from "react-router-dom";
import certficateIcon from "../assets/certificate-icon.svg";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export default function Certificate() {
  const onButtonClick = () => {
    var domElement = document.getElementById("certificateDom");
    htmlToImage
      .toPng(domElement as HTMLElement)
      .then(function (dataUrl) {
        download(dataUrl, "certificate.png");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };
  return (
    <section className="container">
      <div className="jumbotron" id="certificateDom">
        <div className="content">
          <h2 className="heading mb-3">Your Certificates</h2>
          <p className="jumbotron-description">
            Your certificates will appear here.
          </p>
          <img src={certficateIcon} className="icon" alt="certificate icon" />
          <p className="my-4">
            Don’t have a certificate yet? Complete a quiz now to earn your first
            certificate.
          </p>
          <Link to="/dashboard" className="btn-outline-base cta">
            Explore Quizzes
          </Link>
        </div>
      </div>
      <button onClick={onButtonClick}>download certificate</button>
    </section>
  );
}
