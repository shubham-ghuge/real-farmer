import "./App.css";
import "../utils.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import Home from "../../pages/Home";
import Quiz from "../../pages/Quiz";
import Dashboard from "../../pages/Dashboard";
import Certificate from "../../pages/Certificate";
import { Error } from "../Error";
import Login, { logout } from "../Auth/Login";
import Register from "../Auth/Register";
import UserQuizzes from "../../pages/UserQuizzes";
import CertificateValidate from "../../pages/CertificateValidate";
import axios from "axios";

function App() {
  let navigate = useNavigate();
  const UNAUTHORIZED = 401;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        logout();
        return navigate("/");
      }
      return Promise.reject(error);
    }
  );
  
  return (
    <>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/certificate/:email" element={<CertificateValidate />} />
        <Route path="*" element={<Error />} />
        <PrivateRoute path="/quiz/:quizId" element={<Quiz />} />
        <PrivateRoute path="/certificates" element={<Certificate />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
        <PrivateRoute path="/userquizzes" element={<UserQuizzes />} />
      </Routes>
    </>
  );
}

export default App;
