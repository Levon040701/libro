import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = ({ links, currentPage, open, setOpen }) => {
	let k = 0;
	const items = links.map(el => {
		k++;
		return (
			<li key={k}>
				<Link to={el.url || "/"} style={(el.text === currentPage) ? {textDecoration: "underline"} : {}}>{el.text || ""}</Link>
			</li>
		);
	});

	return (
		<nav className={open ? "" : "hidden"}>
			<button className="menuClose" onClick={() => {
				setOpen(false);
			}}>
				<span>&#10005;</span>
			</button>
			<ul className="navbar">
				{items}
			</ul>
			<div className="copyright">
				<p>Copyright &copy;2026 All rights reserved
				<br />
				| This template is made with &#10084; by <span>Levon</span></p>
			</div>
		</nav>
	);
};

export default Menu;

