import React from "react";
import bannerImage from "../../assets/avatars/jade.jpg";
import "./newscard.scss";

const NewsCard = () => {
	return (
		<div className="news-card">
			<img src={bannerImage} alt="news" className="news-card-image" />
			<div className="news-info">
				<a href="/" className="headline psb">
					Facebook preparing new app to maintain pressure
				</a>
				<div className="details">
					<span className="category tab">
						<p className="pxb">Tech</p>
					</span>
					<p className="date-stamp px">3 days ago</p>
					<p className="news-source px text-link">bbc</p>
				</div>
			</div>
		</div>
	);
};

export { NewsCard };
