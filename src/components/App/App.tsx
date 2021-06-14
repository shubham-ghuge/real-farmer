import "./App.css";
import "../utils.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import Home from "../../pages/Home";
import Quiz from "../../pages/Quiz";
import Dashboard from "../../pages/Dashboard";
import Certificate from "../../pages/Certificate";
import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { useAuthContext } from "../../contexts/AuthContext";

function App() {
  const { visibleMenu, setVisibilityMenu } = useAuthContext();
  useEffect(() => {
    if (window.innerWidth >= 600) {
      setVisibilityMenu(() => false);
    }
  }, []);
  return (
    <>
      <div className={`App ${visibleMenu ? "show" : ""}`}>
        <Sidebar />
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <PrivateRoute path="/quiz/:quizId" element={<Quiz />} />
            <PrivateRoute path="/certificates" element={<Certificate />} />
            <PrivateRoute path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
