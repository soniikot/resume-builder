import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Button.jsx";
import "./index.css";
import App from "./App.jsx";
import Contact_data from "./Contact_data.jsx";
import Experience from "./Experience.jsx";
App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Contact_data />
    <Button text="Next" />
    <Experience />
  </React.StrictMode>
);
