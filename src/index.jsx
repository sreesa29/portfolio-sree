import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "../node_modules/normalize.css";
import { BrowserRouter as Router } from "react-router-dom-v5-compat";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);

