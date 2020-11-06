import React from "react";
import { Banner } from "../../components/Banner/Banner";
import { NewSlider } from "../../components/NewsSlider/NewSlider";
import "./home.scss";

const Home = () => {
	return (
		<div className="home">
			<Banner />
			<NewSlider />
		</div>
	);
};

export { Home };
