import "./App.css";
import "../utils.css";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PrivateRoute } from "../PrivateRoute";
import {
  Certificate,
  CertificateValidate,
  Dashboard,
  Home,
  Quiz,
} from "../../pages";
import { Error } from "../Error";
import Result from "../Quiz/Result";
import { Login, Register } from "../Auth";
import { useAuthContext } from "../../contexts/AuthContext";

function App() {
  let navigate = useNavigate();
  const { logout } = useAuthContext();
  function unauthorizedCheck() {
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === UNAUTHORIZED) {
          logout();
          return navigate("/", { replace: true });
        }
        return Promise.reject(error);
      }
    );
  }
  useEffect(() => {
    unauthorizedCheck();
  }, []);

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
        <PrivateRoute path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
