import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContext.Provider value={{ token: "aaa" }}>
        <App />
      </AuthContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
