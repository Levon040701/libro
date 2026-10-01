import { Link } from "react-router-dom";
import "./ModelPost.css";

const ModelPost = ({ title="", tag="", url="", imgSrc="", id=0 }) => {
	return (
		<div className="modelPost" id={`model_post_${id}`}>
			<Link to={url} style={{backgroundImage: `url(${imgSrc})`}}>
				<span className="postDesc">
					<span>{tag}</span>
					<h3>{title}</h3>
				</span>
			</Link>
		</div>
	);
};

export default ModelPost;

