import React from "react";
import "./newsgrid.scss";
import { NewsCard } from "../NewsCard/NewsCard";

const NewsGrid = () => {
	let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12];
	return (
		<div className="news-grid">
			<p className="grid-title psb">recommended</p>
			<div className="items-grid">
				{items.map((item) => (
					<NewsCard key={item} />
				))}
			</div>
		</div>
	);
};

export { NewsGrid };
