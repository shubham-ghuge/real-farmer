import "./App.css";
import "../utils.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import Home from "../../pages/Home";
import Quiz from "../../pages/Quiz";
import Dashboard from "../../pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <PrivateRoute path="/quiz/:quizId" element={<Quiz />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
