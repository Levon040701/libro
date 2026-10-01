import { Link } from "react-router-dom";
import "./TravelPost.css";

const TravelPost = ({ title="", text="", url="", imgSrc="", metaInfo={}, id=0 }) => {
	return (
		<div className="travelPost" id={`travel_post_${id}`} >
			<Link to={url} style={{backgroundImage: `url(${imgSrc})`}} ></Link>
			<div className="postContent">
				<h3>{title}</h3>
				<div className="postMeta">
					<p className="metaText">
						<span className="postAuthor"><Link to={metaInfo.author.url}>{metaInfo.author.text}</Link></span>
						<span className="postDate"><Link to={metaInfo.date.url}>{metaInfo.date.text}</Link></span>
						<span className="postTag"><Link to={metaInfo.tag.url}>{metaInfo.tag.text}</Link></span>
						<span className="postComments"><Link to={metaInfo.comments.url}>{metaInfo.comments.text}</Link></span>
					</p>
				</div>
				<p className="postText">{text}</p>
			</div>
		</div>
	);
};

export default TravelPost;

