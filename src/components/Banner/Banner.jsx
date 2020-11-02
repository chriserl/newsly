import React from "react";
import "./banner.scss";
import bannerImage from "../../assets/images/jsalt.jpg";

const Banner = () => {
	return (
		<div className="banner">
			<div className="banner-image-container">
				<img src={bannerImage} alt="banner" className="banner-image" />
			</div>
			<div className="news-info">
				<span className="category">
					<span className="las la-wifi regular-icon"></span>
					<p className="category-name ps">Technology</p>
				</span>
				<p className="news-title h4">
					Renegades vs Chiefs - ESL Pro League <br /> Season 16 - Playoffs
				</p>
				<div className="minute">
					<p className="source px">The Verge</p>
					<p className="dot"></p>
					<p className="read-time px">15 min read</p>
				</div>
				<button className="read-more link-button">Read more</button>
			</div>
		</div>
	);
};

export { Banner };
