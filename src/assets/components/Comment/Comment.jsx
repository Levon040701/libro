import { Link } from "react-router-dom";
import "./Comment.css";

const Comment = ({ username="", imageSrc="", url="", text="", date="", time="", replyTo="", number="", replies=[] }) => {
	return (
		<div
			id={`comment_${replyTo}-${number}`}
			className="comment"
			style={replyTo.length ? {marginLeft: "40px", marginTop: "50px"} : {}}
		>
			<div className="flexbox">
				<div className="userImage">
					<Link to={url}><img src={imageSrc} alt="" /></Link>
				</div>
				<div className="content">
					<h3 className="user">{username}</h3>
					<div className="met">
						<p><span className="date">{date}</span> at <span className="time">{time}</span></p>
					</div>
					<p className="text">{text}</p>
					<button className="replyBtn">Reply</button>
				</div>
			</div>
			{replies}
		</div>
	);
};

export default Comment;

