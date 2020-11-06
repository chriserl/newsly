import React from "react";
import bannerImage from "../../assets/avatars/jade.jpg";
import "./newscard.scss";

const NewsCard = () => {
	return (
		<div className="news-card">
			<img src={bannerImage} alt="news" className="news-card-image" />
			<div className="news-info">
				<p className="news-source px">bbc</p>
				<p className="headline psb">
					Facebook preparing new app to maintain pressure
				</p>
				<div className="details px">
					<p className="category">Tech</p>
					<p className="date-stamp">3 days ago</p>
				</div>
			</div>
		</div>
	);
};

export { NewsCard };
