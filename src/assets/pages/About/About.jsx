import Header from "../../components/Header/Header";
import Socials from "../../components/Socials/Socials";
import "./About.css";

const About = () => {
	//CAROUSEL
	const slidesInfo = [
		{
			"id": 0,
			"title": "About Us",
			"tag": "About",
			"imageSrc": "./src/assets/images/bg_1.jpg"
		}
	];

	//SOCIALS
	const socialsInfo = [
		{
			name: "twitter",
			url: "#",
			icon: "fa-brands fa-twitter"
		},
		{
			name: "facebook",
			url: "#",
			icon: "fa-brands fa-facebook-f"
		},
		{
			name: "instagram",
			url: "#",
			icon: "fa-brands fa-instagram"
		}
	];
	const socials = socialsInfo.map((el, index) => (
		<Socials name={el.name} url={el.url} iconHTML={el.icon} id={index} key={index} />
	));

	return (
		<>
			<Header slidesInfo={slidesInfo} currentPage="About us" />
			<main id="about">
				<div className="pageContainer">
					<div className="image">
						<img src="./src/assets/images/image_1.jpg" alt="" />
					</div>
					<div className="content">
						<h2>Libro is a Magazine website</h2>
						<p>
							The Big Oxmox advised her not to do so, because there were thousands 
							of bad Commas, wild Question Marks and devious Semikoli, 
							but the Little Blind Text didn’t listen. She packed her seven versalia, 
							put her initial into the belt and made herself on the way.
						</p>
					</div>
					<div className="footer">
						<p>
							Even the all-powerful Pointing has no control about the blind texts 
							it is an almost unorthographic life 
							One day however a small line of blind text by the name of Lorem Ipsum 
							decided to leave for the far World of Grammar.
						</p>
						<h3>Follow us here</h3>
						<ul className="socials">
							{socials}
						</ul>
					</div>
				</div>
			</main>
		</>
	);
};

export default About;

