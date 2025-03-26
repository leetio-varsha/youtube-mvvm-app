import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import "./shared/styles/main.scss";
import Navigation from "@shared/components/Navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <App />
    </Router>
  </React.StrictMode>
);
