import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Topnav } from "../../components/Topnav/Topnav";
import "./newsly.scss";

const Newsly = () => {
	return (
		<div className="newsly">
			<Sidebar />
			<main>
				<Topnav />
			</main>
		</div>
	);
};

export { Newsly };
