import React, { useEffect, useState } from "react";
import { useProducts } from "../../../../context/products";
import { PRODUCT_IN_BASKET_KEY, PRODUCT_IN_FAVORITE_KEY } from "../../../../constants/constants";
import { getFromLS, setToLS } from "../../../../utils/function";

const Product = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false); //состояние для избранного
  const { setBasketCount, setFavoriteCount } = useProducts();

  //добавляем в корзину:
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

  //добавляем в избранное:
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

  //удаляем из избранного:
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

  return (
    <div className="product">
      <div className="photo">
        <div className="top-bar">
          <div className="labels">
            {product.isSale && <div className="label sale">Sale</div>}
            {product.isNew && <div className="label new">New</div>}
          </div>
          <div className="favorites" onClick={toggleFavorite}>
            <img src={isFavorite ? "./images/iconHeart.svg" : "./images/iconFavorites.svg"} alt="Favorite Icon" />
          </div>
        </div>
        <img src={product.image} className="product-image" alt={product.name} />
      </div>
      <div className="info">
        <div className="name">{product.name}</div>
        <div className="price">
          <div className="current-price">${product.price}</div>
          {product.oldPrice && <div className="old-price">${product.oldPrice}</div>}
        </div>
      </div>
      <button className="buy-btn" onClick={() => buyProduct(product)}>
        Купить
      </button>
    </div>
  );
};

export default Product;
