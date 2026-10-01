import { useEffect, useRef, useState } from "react";
import Slide from "../Slide/Slide";
import "./Header.css";
import Menu from "../Menu/Menu";
import { Link, Outlet } from "react-router-dom";

const Header = ({ slidesInfo, currentPage="Home" }) => {
	//CAROUSEL
	const [visibleSlide, setVisibleSlide] = useState(0);
	const slideShow = useRef(null);
	const slidesArr = slidesInfo.map(el => (
		<Slide title={el.title} tag={el.tag} imageSrc={el.imageSrc} visibleSlide={visibleSlide} id={el.id} key={el.id} />
	));

	const l = slidesArr.length;
	useEffect(() => {
		let currentIndex = 0;

		setInterval(() => {
			currentIndex++;
			
			if (currentIndex >= l) {
				currentIndex = 0;
			}

			setVisibleSlide(currentIndex);
		}, 4000);
	}, [l]);

	// MENU
	let linksInfo = [
		{"url": "/", "text": "Home"},
		{"url": "/fashion", "text": "Fashion"},
		{"url": "/model", "text": "Model"},
		{"url": "/travel", "text": "Travel"},
		{"url": "/about", "text": "About us"},
		{"url": "/contact", "text": "Contact"}
	];
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header>
				<div className="navContainer">
					<div className="logo">
						<Link to={"/"}>libro</Link>
					</div>
					<button className="menuOpen" onClick={() => {
						setMenuOpen(true);
					}}>
						<span></span>
						<span className="middleBar"></span>
						<span></span>
					</button>
					<Menu links={linksInfo} currentPage={currentPage} open={menuOpen} setOpen={setMenuOpen} />
				</div>
				<ul className="slides" ref={slideShow}>
					{slidesArr}
				</ul>
			</header>
			<Outlet />
		</>
	);
};

export default Header;

