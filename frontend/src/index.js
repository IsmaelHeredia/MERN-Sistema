import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootswatch/dist/slate/bootstrap.min.css"
import $ from "jquery";
import { createPopper } from "@popperjs/core";
import "bootstrap/dist/js/bootstrap.bundle.min";

window.$url_api = "http://localhost:3030";
window.$nombre_session = "react_session";
window.$nombre_session_mensaje = "mensaje_session";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
