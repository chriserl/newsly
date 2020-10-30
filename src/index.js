import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Newsly } from "./pages/newsly/Newsly";
import "./sass/main.scss";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

ReactDOM.render(
	<React.StrictMode>
		<Newsly />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
