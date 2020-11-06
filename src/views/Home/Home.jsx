import React from "react";
import { Banner } from "../../components/Banner/Banner";
import { NewsGrid } from "../../components/NewsGrid/NewsGrid";
import { NewSlider } from "../../components/NewsSlider/NewSlider";
import "./home.scss";

const Home = () => {
	return (
		<div className="home">
			<Banner />
			<NewSlider />
			<NewsGrid />
		</div>
	);
};

export { Home };
