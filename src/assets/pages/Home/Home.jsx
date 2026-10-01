import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

const Home = () => {
	//CAROUSEL
	const slidesInfo = [
		{
			"id": 0,
			"title": "Popular Lifestyle with Fashion & Modeling",
			"tag": "Fashion",
			"imageSrc": "./src/assets/images/bg_1.jpg"
		},
		{
			"id": 1,
			"title": "Canadian Girl make your world go round",
			"tag": "Model",
			"imageSrc": "./src/assets/images/bg_2.jpg"
		}
	];

	return (
		<>
			<Header slidesInfo={slidesInfo} />
			<Main />
		</>
	);
};

export default Home;

