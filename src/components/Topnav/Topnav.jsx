import React from "react";
import "./topnav.scss";
import jade from "../../assets/avatars/jade.jpg";

const Topnav = (props) => {
	return (
		<div className="topnav">
			<button
				onClick={props.toggleBarState}
				className="light-large-icon-button menu-button"
			>
				<span className="las la-bars"></span>
			</button>
			<form>
				<div className="search-component">
					<input
						type="text"
						className="search-input"
						placeholder="Search for news"
					/>
					<button className="regular-icon-button search-submit">
						<span className="las la-search"></span>
					</button>
				</div>
			</form>

			<div className="actions">
				<button className="regular-icon-button search-action">
					<span className="las la-search"></span>
				</button>
				<div className="user-image">
					<img src={jade} alt="user" className="jade" />
				</div>
			</div>
		</div>
	);
};

export { Topnav };
