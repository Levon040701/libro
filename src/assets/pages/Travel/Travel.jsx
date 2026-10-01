import Header from "../../components/Header/Header";
import TravelPost from "../../components/TravelPost/TravelPost";
import Pagination from "../../components/Pagination/Pagination";

const Travel = () => {
	//CAROUSEL
	const slidesInfo = [
		{
			"id": 0,
			"title": "Popular Lifestyle with Fashion & Modeling",
			"tag": "Fashion",
			"imageSrc": "./src/assets/images/bg_4.jpg"
		},
		{
			"id": 1,
			"title": "Canadian Girl make your world go round",
			"tag": "Model",
			"imageSrc": "./src/assets/images/bg_1.jpg"
		},
		{
			"id": 2,
			"title": "Canadian Girl make your world go round",
			"tag": "Model",
			"imageSrc": "./src/assets/images/bg_3.jpg"
		}
	];

	//POSTS
	const postTitle = "The Big Oxmox advised her not to do so, because there";
	const postText = `Even the all-powerful Pointing has no control about the blind texts 
		it is an almost unorthographic life One day however a small line of blind text.`;
	const postURL = "/single";
	const postImg = "./src/assets/images/image_";
	const postMeta = {
		author: {text: "Admin", url: "#"},
		date: {text: "July 29, 2018", url: "#"},
		tag: {text: "Fashion", url: "#"},
		comments: {text: "12 Comments", url: "#"}
	};
	const posts = [];
	for (let i = 0; i < 9; i++) {
		posts.push(
			<li key={i}>
				<TravelPost
					title={postTitle}
					text={postText}
					url={postURL}
					imgSrc={postImg + (i + 1) + ".jpg"}
					metaInfo={postMeta}
					id={i + 1}
				/>
			</li>
		);
	}

	return (
		<>
			<Header slidesInfo={slidesInfo} currentPage="Travel" />
			<main id="travel">
				<ul className="postsContainer">
					{posts}
				</ul>
				<Pagination maxPagesShown={5}/>
			</main>
		</>
	)
}

export default Travel;

