const PaginationBtn = ({ n }) => {
    return (
        <li id={`page_${n}`}><button>{n}</button></li>
    );
};

export default PaginationBtn;

