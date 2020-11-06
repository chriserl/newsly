import React from "react";
import "./banner.scss";
import bannerImage from "../../assets/images/jsx.jpg";

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner-image-container">
				<img src={bannerImage} alt="banner" className="banner-image" />
			</div>
			<div className="news-info">
				<p className="news-title h4">
					Renegades vs Chiefs - ESL Pro League <br /> Season 16 - Playoffs
				</p>
				<div className="minute">
					<p className="source px">The Verge</p>
					<p className="read-time px">15 min read</p>
					<button className="read-more link-button">Read more</button>
				</div>
			</div>
		</div>
	);
};

export { Banner };
