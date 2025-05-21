import {useState, useEffect, useCallback} from "react";

export const useProductFilter = (products, setFilteredProducts) => {
  const [searchValue, setSearchValue] = useState("");
  const [minPrice, setMinPrice] = useState(undefined);
  const [maxPrice, setMaxPrice] = useState(undefined);
  const [colors, setColors] = useState([]);
  const [categories, setCategories] = useState("All");
  const [searchedProducts, setSearchedProducts] = useState(products);

  useEffect(() => {
    let filteredBySearch = products.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()));
    setSearchedProducts(filteredBySearch);
    setFilteredProducts(filteredBySearch);
  }, [searchValue, products]);

  const filterProducts = useCallback(() => {
    let filteredProducts = searchedProducts;

    if (minPrice || maxPrice) {
      filteredProducts = filteredProducts.filter((product) => product.price >= minPrice && product.price <= maxPrice);
    }

    if (colors.length > 0) {
      filteredProducts = filteredProducts.filter((product) => colors.includes(product.color));
    }

    if (categories && categories !== "All") {
      if (categories === "New Arrivals") {
        filteredProducts = filteredProducts.filter((product) => product.isNew === true);
      } else {
        filteredProducts = filteredProducts.filter((product) => product.categories.includes(categories));
      }
    }

    setFilteredProducts(filteredProducts);
  }, [searchedProducts, minPrice, maxPrice, colors, categories, setFilteredProducts]);

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handlePrice = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleColor = (color) => {
    setColors(color);
  };

  const handleCategory = (category) => {
    setCategories(category);
  };

  return {
    searchValue,
    minPrice,
    maxPrice,
    colors,
    categories,
    handleSearch,
    handlePrice,
    handleColor,
    handleCategory,
    filterProducts
  };
};
