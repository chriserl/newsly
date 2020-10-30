import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Topnav } from "../../components/Topnav/Topnav";
import "./newsly.scss";

const Newsly = () => {
	let [barState, setBarState] = useState(() => "sidebar-open");

	let toggleBarState = () => {
		setBarState(() =>
			barState === "sidebar-open" ? "sidebar-closed" : "sidebar-open"
		);
	};

	let exitSidebar = () => {
		setBarState(() => "sidebar-closed");
	};

	return (
		<div className="newsly">
			<Sidebar barState={barState} />
			<main onClick={() => exitSidebar()}>
				<Topnav toggleBarState={() => toggleBarState()} />
			</main>
		</div>
	);
};

export { Newsly };
