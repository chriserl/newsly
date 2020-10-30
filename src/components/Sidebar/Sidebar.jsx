import React, { useState } from "react";
import "./sidebar.scss";

const Sidebar = () => {
	let [barState, setBarState] = useState(() => "sidebar-open");

	let toggleBar = () => {
		setBarState(() =>
			barState === "sidebar-open" ? "sidebar-closed" : "sidebar-open"
		);
	};

	return (
		<nav className={`sidebar ${barState}`}>
			<div className="sidebar-header">
				<a href="./" className="brand">
					<span className="lab la-cloudsmith"></span>
					<p className="brand-text">Newsly</p>
				</a>
				<button
					onClick={() => toggleBar()}
					className="close-sidebar-button regular-icon-button"
				>
					<span className="las la-times"></span>
				</button>
			</div>
			<div className="categories">
				<p className="categories-title px">categories</p>
				<ul className="categories-list">
					<li className="category-item">
						<a href="./" className="category-link">
							<span className="las la-braille regular-icon"></span>
							<p className="ps">Home</p>
						</a>
					</li>
					<li className="category-item">
						<a href="./" className="category-link">
							<span className="las la-map-marker regular-icon"></span>
							<p className="ps">International</p>
						</a>
					</li>
					<li className="category-item">
						<a href="./" className="category-link">
							<span className="las la-euro-sign regular-icon"></span>
							<p className="ps">Business</p>
						</a>
					</li>
					<li className="category-item">
						<a href="./" className="category-link">
							<span className="las la-microphone regular-icon"></span>
							<p className="ps">Entertainment</p>
						</a>
					</li>
					<li className="category-item">
						<a href="./" className="category-link">
							<span className="las la-basketball-ball regular-icon"></span>
							<p className="ps">Sports</p>
						</a>
					</li>
					<li className="category-item">
						<a href="./" className="category-link">
							<span className="las la-heartbeat regular-icon"></span>
							<p className="ps">Health</p>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export { Sidebar };
