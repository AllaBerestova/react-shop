import React, { useState, useEffect } from "react";
import "./shop.css";
import Product from "./components/product/products";
import productsData from "../../products.json";
import { Pagination } from "./components/pagination/pagination";
import { Sidebar } from "./components/sidebar/sidebar";
import { SortAndCount } from "./components/sortAndCount/sortAndCount";

const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData.products);

  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts]);

  const sortProducts = (order) => {
    let sortedProducts = [...filteredProducts];

    switch (order) {
      case "ASC":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "DESK":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "RELEVANCE":
        sortedProducts = productsData.products;
        break;
      default:
        break;
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="container mw-1140">
      <div className="shop">
        <Sidebar products={productsData.products} setFilteredProducts={setFilteredProducts} />
        <div className="products-wrapper">
          <SortAndCount filteredProducts={filteredProducts} sortProducts={sortProducts} />
          <div className="products">
            {currentProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
          <Pagination onPageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
