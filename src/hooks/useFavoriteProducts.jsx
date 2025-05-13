import { useState, useEffect } from "react";
import { useProducts } from "../context";
import { PRODUCT_IN_FAVORITE_KEY } from "../constants";
import { getFromLS, setToLS } from "../utils";

export const useFavoriteProducts = (product) => {
  const { setFavoriteCount } = useProducts();
  const [isFavorite, setIsFavorite] = useState(false);

  const addToFavorites = (product) => {
    const productsInFavorite = getFromLS(PRODUCT_IN_FAVORITE_KEY);

    if (!productsInFavorite) {
      setToLS(PRODUCT_IN_FAVORITE_KEY, [{ ...product, quantity: 1 }]);
      setFavoriteCount((prevCount) => prevCount + 1);
      return true;
    }

    productsInFavorite.push({ ...product, quantity: 1 });
    setToLS(PRODUCT_IN_FAVORITE_KEY, productsInFavorite);
    setFavoriteCount((prevCount) => prevCount + 1);
  };

  const removeFromFavorites = (product) => {
    const productsInFavoriteDelete = getFromLS(PRODUCT_IN_FAVORITE_KEY);

    if (!productsInFavoriteDelete) {
      return false;
    }

    const deleteFavorite = productsInFavoriteDelete.filter((item) => item.id !== product.id);
    setToLS(PRODUCT_IN_FAVORITE_KEY, deleteFavorite);
    setFavoriteCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    const productsInFavorite = getFromLS(PRODUCT_IN_FAVORITE_KEY) || [];
    setIsFavorite(productsInFavorite.some((item) => item.id === product.id)); //обновляем состояние при изменении
  }, [product.id]);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
    setIsFavorite(!isFavorite);
  };

  return { toggleFavorite, isFavorite };
};
