import { Link } from "react-router-dom";
import "./Socials.css";

const Socials = ({ name="", url="", iconHTML="", id=0 }) => {
	return (
		<li className="socialsLink" id={`socials_link_${id}`}>
			<Link to={url} title={name}>
				<i className={iconHTML}></i>
			</Link>
		</li>
	);
};

export default Socials;

