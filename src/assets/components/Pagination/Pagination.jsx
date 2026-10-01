import "./Pagination.css";

const Pagination = ({ maxPagesShown=0, currentPage=0 }) => {
	const buttons = [];
	for (let i = 0; i < maxPagesShown; i++) {
		buttons.push(<li id={`page_${i + 1}`} className={i === currentPage ? "currentPage" : ""} key={i} >
			<button>{i + 1}</button>
		</li>);
	}

	return (
		<ul className="pagination">
			<li><button><span>&#10094;</span></button></li>
			{buttons}
			<li><button><span>&#10095;</span></button></li>
		</ul>
	);
};

export default Pagination;

