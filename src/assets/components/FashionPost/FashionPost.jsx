import { Link } from "react-router-dom";
import "./FashionPost.css";

const FashionPost = ({ title="", text="", url="", mediaType="", mediaSrc="", metaInfo={}, id=0 }) => {
	return (
		<article className="fashionPost" id={`fashion_post_${id}`}>
			<Link to={url} className="postMedia" style={mediaType === "image" ? {backgroundImage: `url(${mediaSrc})`} : {}}>
				{mediaType === "video" ? `<video><source src="${mediaSrc}" type="video/mp4" /></video>` : ``}
			</Link>
			<div className="postInfo">
				<div className="postMeta">
					<p className="metaText">
						<span className="postAuthor"><Link to={metaInfo.author.url}>{metaInfo.author.text}</Link></span>
						<span className="postDate"><Link to={metaInfo.date.url}>{metaInfo.date.text}</Link></span>
						<span className="postTag"><Link to={metaInfo.tag.url}>{metaInfo.tag.text}</Link></span>
						<span className="postComments"><Link to={metaInfo.comments.url}>{metaInfo.comments.text}</Link></span>
					</p>
				</div>
				<div className="postContent">
					<h3>{title}</h3>
					<p>{text}</p>
					<Link to={url} className="postLink">Read more</Link>
				</div>
			</div>
		</article>
	);
};

export default FashionPost;

