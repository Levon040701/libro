import { useState } from "react";
import Header from "../../components/Header/Header";
import "./Contact.css";

const Contact = () => {
	//CAROUSEL
	const slidesInfo = [
		{
			"id": 0,
			"title": "Contact Us",
			"tag": "Contact",
			"imageSrc": "./src/assets/images/bg_1.jpg"
		}
	];

	//FORM CONTROL
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(name, email, subject, message);

		if (!email.includes("@")) {
			alert("Invalid e-mail");
			return;
		}
	};

	return (
		<>
			<Header slidesInfo={slidesInfo} currentPage="Contact" />
			<main id="contact">
				<div className="pageContainer">
					<div className="contactInfo">
						<h4>Contact Information</h4>
						<div className="table">
							<div className="column">
								<p>
									<span>Address:</span>
									<span>198 West 21th Street, Suite 721 New York NY 10016</span>
								</p>
							</div>
							<div className="column">
								<p>
									<span>Phone:</span>
									<a href="#">+ 1235 2355 98</a>
								</p>
							</div>
							<div className="column">
								<p>
									<span>Email:</span>
									<a href="#">info@yoursite.com</a>
								</p>
							</div>
							<div className="column">
								<p>
									<span>Website:</span>
									<a href="#">yoursite.com</a>
								</p>
							</div>
						</div>
					</div>
					<form action="" onSubmit={(e) => handleSubmit(e)} name="contact">
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							autoComplete="off"
							onChange={e => setName(e.target.value)}
							value={name}
						/>
						<input
							type="text"
							name="e-mail"
							placeholder="Your Email"
							autoComplete="off"
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
						<input
							type="text"
							name="subject"
							placeholder="Subject"
							autoComplete="off"
							onChange={e => setSubject(e.target.value)}
							value={subject}
						/>
						<textarea
							cols="30"
							rows="7"
							name="message"
							id="message"
							placeholder="Message"
							autoComplete="off"
							onChange={e => setMessage(e.target.value)}
							value={message}
						></textarea>
						<input type="submit" value="Send Message" />
					</form>
					<div className="map">

					</div>
				</div>
			</main>
		</>
	);
};

export default Contact;

