import { Outlet } from "react-router";
import logo from "../assets/logo.svg";
import { Footer } from "../components/Footer";

function Home() {
  return (
    <>
      <section className="home">
        <div className="text">
          <h1>
            Real Farmer <span>Quiz</span>{" "}
          </h1>
          <p>A farmer's knowledge is his or her best possession.</p>
        </div>
        <section>
          <div className="d-flex jc-center">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="user-auth bdrs-2">
            <Outlet />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export { Home };
