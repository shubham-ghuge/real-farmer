import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { QuizProvider } from "./contexts/QuizContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
