import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Topnav } from "../../components/Topnav/Topnav";
import { Home } from "../../views/Home/Home";
import "./newsly.scss";

const Newsly = () => {
	let [barState, setBarState] = useState(() => "sidebar-closed");

	let toggleBarState = () => {
		setBarState(() =>
			barState === "sidebar-closed" ? "sidebar-opened" : "sidebar-closed"
		);
	};

	let exitSidebar = () => {
		barState === "sidebar-opened" && toggleBarState();
	};

	return (
		<div className="newsly" onClick={() => exitSidebar()}>
			<Sidebar barState={barState} />
			<main>
				<Topnav toggleBarState={() => toggleBarState()} />
				<Home />
			</main>
		</div>
	);
};

export { Newsly };
