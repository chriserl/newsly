import React from "react";
import "./newslider.scss";
import { NewsCard } from "../NewsCard/NewsCard";

const NewSlider = () => {
	let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<div className="newslider">
			<div className="slider-header">
				<p className="slider-title psb">today</p>
				<div className="slider-controls px">
					<button className="regular-icon-button">
						<span className="las la-long-arrow-alt-left"></span>
					</button>
					<button className="regular-icon-button">
						<span className="las la-long-arrow-alt-right"></span>
					</button>
				</div>
			</div>
			<div className="slider-body">
				<ul className="slider-items">
					{cards.map((card) => (
						<li className="slider-item" key={card}>
							<NewsCard />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export { NewSlider };
