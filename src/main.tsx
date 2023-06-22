import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
