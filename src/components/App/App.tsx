import React, { useEffect, useState } from "react";
import "./App.css";
import "../utils.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

function App() {
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
      </main>
    </div>
  );
}

export default App;
