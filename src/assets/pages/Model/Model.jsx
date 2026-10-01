import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import ModelPost from "../../components/ModelPost/ModelPost";
import "./Model.css";

const Model = () => {
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
			"imageSrc": "./src/assets/images/bg_3.jpg"
		},
		{
			"id": 2,
			"title": "Canadian Girl make your world go round",
			"tag": "Model",
			"imageSrc": "./src/assets/images/bg_2.jpg"
		}
	];

	//POSTS
	const posts = [];
	for (let i = 0; i < 10; i++) {
		posts.push(
			<li key={i}>
				<ModelPost
					title="2018 Super Asia Model"
					tag="Model"
					url="/single"
					imgSrc={`./src/assets/images/image_${i + 1}.jpg`}
					id={i}
				/>
			</li>
		);
	}

	return (
		<>
			<Header slidesInfo={slidesInfo} currentPage="Model" />
			<main id="model">
				<ul className="postsContainer">
					{posts}
				</ul>
				<Pagination maxPagesShown={5}/>
			</main>
		</>
	);
};

export default Model;

