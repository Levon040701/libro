import "./Slide.css";

const Slide = ({ title, tag, imageSrc, visibleSlide, id }) => {
	return (
		<div
			className={`slide ${visibleSlide === id ? "": "hidden"}`}
			id={`slide_${id}`}
			style={{backgroundImage: `url(${imageSrc})`}}
		>
			<div className="slideFlexBox">
				<div className="slideContent">
					<p className="tag"><span>{tag}</span></p>
					<h2 className="slideTitle">{title}</h2>
				</div>
			</div>
		</div>
	);
};

export default Slide;

