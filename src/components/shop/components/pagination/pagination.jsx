import React from "react";

export const Pagination = ({ onPageChange, currentPage, totalPages }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination" id="pagination">
      <div className="button-left" onClick={() => handlePageChange(currentPage - 1)}>
        <img src="./images/left-arrow.svg" alt="left-arrow" />
      </div>
      <div className="pages">
        {pageNumbers.map((number) => (
          <span
            key={number}
            className={number === currentPage ? "page active" : "page"}
            onClick={() => handlePageChange(number)}
          >
            {number}
          </span>
        ))}
      </div>
      <div className="button-right" onClick={() => handlePageChange(currentPage + 1)}>
        <img src="./images/right-arrow.svg" alt="right-arrow" />
      </div>
    </div>
  );
};
