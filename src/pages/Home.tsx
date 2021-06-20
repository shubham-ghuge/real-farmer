import { Outlet } from "react-router";
import PrimaryHeader from "../components/Header/PrimaryHeader";

export default function Home() {
  return (
    <>
      <PrimaryHeader />
      <section className="hero container">
        <h2 className="heading px-4">
          A farmer's knowledge is his or her best possession.
        </h2>
        <p className="fsz-1 px-4">
          If you are a farmer, try the quizzes and get yourself certified.
        </p>
      </section>
      <section className="user-auth">
        <div>
          <Outlet />
        </div>
      </section>
    </>
  );
}
