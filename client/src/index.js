import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import LazyLoading from "./LazyLoading.js";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<LazyLoading />, document.getElementById("root"));
registerServiceWorker();
