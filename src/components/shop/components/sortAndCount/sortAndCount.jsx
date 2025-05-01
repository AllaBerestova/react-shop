import React from "react";

export const SortAndCount = ({ filteredProducts, sortProducts }) => {
  const handleSortChange = (event) => {
    sortProducts(event.target.value);
  };

  return (
    <>
      <div className="sort-and-count">
        <div className="products-count">
          There are{" "}
          <span id="products-count" className="bold">
            {filteredProducts.length}
          </span>{" "}
          products in this category
        </div>
        <div className="sort">
          <select className="input" onChange={handleSortChange}>
            <option value="RELEVANCE">Relevance</option>
            <option value="ASC">from A to Z</option>
            <option value="DESK">from low to high</option>
          </select>
        </div>
      </div>
    </>
  );
};
