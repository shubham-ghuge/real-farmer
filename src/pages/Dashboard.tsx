import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";

export default function Dashboard() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 600) {
      setMenuVisible(true);
    }
  }, []);
  return (
    <div className={`App ${isMenuVisible ? "show" : ""}`}>
      <Sidebar />
      <main>
        <Header isVisible={isMenuVisible} setFunction={setMenuVisible} />
        <section className="quiz-grid container">
          <h3 className="heading">Welcome Back, User !</h3>
          <div className="flex-layout">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </main>
    </div>
  );
}
