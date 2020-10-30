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

	return (
		<div className="newsly">
			<Sidebar sidebarState={barState} />
			<main onClick={() => toggleBarState()}>
				<Topnav />
			</main>
		</div>
	);
};

export { Newsly };
