import ReactPaginate from "react-paginate";
import "./Pagination.css";
import { useEffect, useState } from "react";
function Pagination({ searchValue, setPage, numberOfPage }) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
  }, [searchValue]);
  return (
    <div className="pagination-container">
      <ReactPaginate
        className="pagination"
        disabledClassName="disabled"
        previousLabel="Prev"
        previousClassName="btn"
        nextClassName="btn"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active-page"
        pageCount={numberOfPage > 20 ? 20 : numberOfPage}
        onPageChange={(data) => {
          setPage(data.selected + 1);
          setCurrentPage(data.selected);
        }}
        forcePage={currentPage}
      />
    </div>
  );
}

export default Pagination;
