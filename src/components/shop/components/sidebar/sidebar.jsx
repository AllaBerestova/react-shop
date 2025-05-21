import { Search } from "./components/search";
import { Categories } from "./components/categories";
import { Price } from "./components/price";
import { Colors } from "./components/colors";
import { ReviewedProducts } from "./components/reviewedProducts";
import { useProductFilter } from "../../../../hooks/useProductFilter";

export const Sidebar = ({ products, setFilteredProducts }) => {
  const {
    searchValue,
    minPrice,
    maxPrice,
    colors,
    categories,
    handleSearch,
    handlePrice,
    handleColor,
    handleCategory,
    filterProducts,
  } = useProductFilter(products, setFilteredProducts);

  const handleApplyBtn = () => {
    filterProducts();
  };

  return (
    <div className="sidebar">
      <Search onSearch={handleSearch} searchValue={searchValue} />
      <div className="sidebar-item">
        <Categories onCategory={handleCategory} categories={categories} />
      </div>
      <div className="sidebar-item">
        <Price onMinPrice={handlePrice} onMaxPrice={handlePrice} minPrice={minPrice} maxPrice={maxPrice} />
      </div>
      <div className="sidebar-item">
        <Colors onColors={handleColor} colors={colors} />
      </div>
      <div className="sidebar-item">
        <div className="button-wrapper">
          <button className="button" onClick={handleApplyBtn}>
            Apply filter
          </button>
          <div className="vertical-line"></div>
        </div>
      </div>
      <div className="sidebar-item">
        <ReviewedProducts products={products} />
      </div>
      <div>
        <a href="">
          <img src="./images/banner.svg" alt="banner" />
        </a>
      </div>
    </div>
  );
};
