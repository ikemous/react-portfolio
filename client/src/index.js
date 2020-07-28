import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import LazyLoading from "./LazyLoading.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<LazyLoading><App /></LazyLoading>, document.getElementById("root"));
registerServiceWorker();
