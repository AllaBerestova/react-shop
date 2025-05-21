import { useProducts } from "../context";
import { PRODUCT_IN_BASKET_KEY } from "../constants";
import { useLocalStorage } from "./useLocalStorage";

export const useBasketProducts = () => {
  const { setBasketCount } = useProducts();
  const {getFromLS, setToLS} = useLocalStorage();
  const buyProduct = (product) => {
    const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);
    if (!productsInBasket) {
      setToLS(PRODUCT_IN_BASKET_KEY, [{ ...product, quantity: 1 }]);
      setBasketCount((prevCount) => prevCount + 1);
      return true;
    }

    let hasProductInBasket = false;
    const updateProducts = productsInBasket.map((productInBasket) => {
      if (productInBasket.id === product.id) {
        hasProductInBasket = true;

        return {
          ...productInBasket,
          quantity: productInBasket.quantity + 1,
        };
      }

      return productInBasket;
    });

    if (hasProductInBasket) {
      setToLS(PRODUCT_IN_BASKET_KEY, updateProducts);
      setBasketCount((prevCount) => prevCount + 1);
      return true;
    }

    productsInBasket.push({ ...product, quantity: 1 });
    setToLS(PRODUCT_IN_BASKET_KEY, productsInBasket);
    setBasketCount((prevCount) => prevCount + 1);
  };

  return { buyProduct };
};
