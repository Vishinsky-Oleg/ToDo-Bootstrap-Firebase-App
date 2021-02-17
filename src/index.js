import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";
// import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const application = (
    <Router>
        {/* <React.StrictMode> */}
            <App />
        {/* </React.StrictMode> */}
    </Router>
);

ReactDOM.render(application, document.getElementById("root"));

