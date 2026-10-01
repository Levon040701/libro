import Header from "../../components/Header/Header";
import Pagination from "../../components/Pagination/Pagination";
import FashionPost from "../../components/FashionPost/FashionPost";

const Fashion = () => {
	//CAROUSEL
	const slidesInfo = [
		{
			"id": 0,
			"title": "Popular Lifestyle with Fashion & Modeling",
			"tag": "Fashion",
			"imageSrc": "../../../src/assets/images/bg_1.jpg"
		},
		{
			"id": 1,
			"title": "Canadian Girl make your world go round",
			"tag": "Model",
			"imageSrc": "../../../src/assets/images/bg_2.jpg"
		}
	];

	//POSTS
	const postTitle = "The Big Oxmox advised her not to do so, because there";
	const postText = `Even the all-powerful Pointing has no control about the blind texts 
		it is an almost unorthographic life One day however a small line of blind text.`;
	const postURL = "/single";
	const postMediaType = "image";
	const postMediaSrc = "./src/assets/images/image_";
	const postMeta = {
		"author": {"text": "Admin", "url": "/single"},
		"date":  {"text": "July 29, 2018", "url": "/single"},
		"tag":  {"text": "", "url": "/single"},
		"comments":  {"text": "12 Comments", "url": "/single"}
	};
	const postTags = ["Video", "Fashion", "Lifestyle", "Travel", "Model", "Fashion"];

	const posts = postTags.map((el, index) => (
		<li key={index}>
			<FashionPost
				title={(index == 0) ? "Watch video tutorial on how to make do photoshop editing" : postTitle}
				text={postText}
				url={postURL}
				mediaType={postMediaType}
				mediaSrc={postMediaSrc + (index + 1) + ".jpg"}
				metaInfo={{...postMeta, "tag": {"text": el, "url": "/single"}}}
				id={index}
			/>
		</li>
	));

	return (
		<>
			<Header slidesInfo={slidesInfo} currentPage="Fashion" />
			<main id="fashion">
				<ul>
					{posts}
				</ul>
				<Pagination maxPagesShown={5}/>
			</main>
		</>
	);
};

export default Fashion;

