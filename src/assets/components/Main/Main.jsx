import Article from "../Article/Article";
import Pagination from "../Pagination/Pagination";
import "./Main.css";

const Main = () => {
	//ARTICLES
	const col1_articles = [];
	const col2_articles = [];
	for (let i = 0; i < 8; i++) {
		let placeholderText = `Far far away, behind the word mountains, 
			far from the countries Vokalia and Consonantia, 
			there live the blind texts.`;
		const currentItem = <Article
			title="Life looks happier"
			text={placeholderText}
			date="July 29, 2018"
			dateUrl="/single"
			author="admin"
			authorUrl="/single"
			imageSrc={`./src/assets/images/image_${i + 1}.jpg`}
			url="/single"
			id={i + 1}
			key={i + 1}
		/>;

		if (i < 4) {
			col1_articles.push(currentItem);
		} else {
			col2_articles.push(currentItem);
		}
	}

	return (
		<main id="home">
			<div className="articles">
				<div className="col" id="col_1">{col1_articles}</div>
				<div className="col" id="col_2">{col2_articles}</div>
			</div>
			<Pagination maxPagesShown={5}/>
		</main>
	);
};

export default Main;

