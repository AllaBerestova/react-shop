import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { PRODUCT_IN_BASKET_KEY, PRODUCT_IN_FAVORITE_KEY } from "../constants/index";

export const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [basketCount, setBasketCount] = useState(0)
  const [favoriteCount, setFavoriteCount] = useState(0)
  const {getFromLS} = useLocalStorage()

  const readBasketCount = () => {
    const basketItems = getFromLS(PRODUCT_IN_BASKET_KEY) || [];
    return basketItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  const readFavoriteCount = () => {
    const favoriteItems = getFromLS(PRODUCT_IN_FAVORITE_KEY) || [];
    return favoriteItems.length;
  }
  
  useEffect(() => {
    setBasketCount(readBasketCount())
    setFavoriteCount(readFavoriteCount())
  },[])

  return (
    <ProductsContext.Provider value={{ basketCount, favoriteCount, setBasketCount, setFavoriteCount }}>
      {children}
    </ProductsContext.Provider>
  );
};
