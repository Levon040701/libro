import { Link } from "react-router-dom";
import "./Article.css";

const Article = ({ title, text, date, dateUrl, author, authorUrl, imageSrc, url, id }) => {
	return (
		<article id={`article_${id}`}>
			<div className="articleImage">
				<Link to={url}><img src={imageSrc} alt="" /></Link>
			</div>
			<div className="articleInfo">
				<Link to={dateUrl} className="articleDate">{date}</Link>
				<Link to={authorUrl} className="articleAuthor">{author}</Link>
			</div>
			<div className="articleContent">
				<h3><Link to={url}>{title}</Link></h3>
				<p>{text}</p>
			</div>
		</article>
	);
};

export default Article;

