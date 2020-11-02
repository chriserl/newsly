import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Topnav } from "../../components/Topnav/Topnav";
import { Home } from "../../views/Home/Home";
import "./newsly.scss";

const Newsly = () => {
	let [barState, setBarState] = useState(() => "sidebar-opened");

	let toggleBarState = () => {
		setBarState(() =>
			barState === "sidebar-closed" ? "sidebar-opened" : "sidebar-closed"
		);
	};

	return (
		<div className="newsly">
			<Sidebar barState={barState} />
			<main onClick={() => toggleBarState()}>
				<Topnav toggleBarState={() => toggleBarState()} />
				<Home />
			</main>
		</div>
	);
};

export { Newsly };
