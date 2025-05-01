import React from "react";
import { useProducts } from "../../../context/products";
import { PRODUCT_IN_BASKET_KEY } from "../../../constants/constants";
import { setToLS } from "../../../utils/function";

export const ProductCart = ({ productsCart, setProductsCart }) => {
  const { setBasketCount } = useProducts();

  const addProductCart = (e) => {
    const productElement = e.target.closest(".product");

    const productId = productElement.dataset.id;

    const newProductsCart = productsCart.map((product) => {
      if (product.id === Number(productId)) {
        product.quantity += 1;
        setBasketCount((prevCount) => prevCount + 1);
      }
      return product;
    });

    setToLS(PRODUCT_IN_BASKET_KEY, newProductsCart);
    setProductsCart(newProductsCart);
  };

  const removeProductCart = (e) => {
    const productElement = e.target.closest(".product");

    const productId = productElement.dataset.id;

    const newProductsCart = productsCart
      .map((product) => {
        if (product.id === Number(productId)) {
          product.quantity -= 1;
          setBasketCount((prevCount) => prevCount - 1);
          if (product.quantity === 0) {
            return null;
          }
        }
        return product;
      })
      .filter(Boolean);

    setToLS(PRODUCT_IN_BASKET_KEY, newProductsCart);
    setProductsCart(newProductsCart);
  };

  const deleteProductCart = (e) => {
    const productElement = e.target.closest(".product");

    const productId = productElement.dataset.id;

    const productInBasket = productsCart.find((product) => product.id === Number(productId));

    if (productInBasket) {
      const newProductsCart = productsCart.filter((product) => product.id !== Number(productId));
      setBasketCount((prevCount) => prevCount - productInBasket.quantity);
      setToLS(PRODUCT_IN_BASKET_KEY, newProductsCart);
      setProductsCart(newProductsCart);
    }
  };

  return (
    <div className="product-list">
      {productsCart.map((product) => (
        <div className="product" key={product.id} data-id={product.id}>
          <div className="photo-cart">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <div className="title">{product.name}</div>
            <div className="price-wrapper">
              <div className="price-and-quantity">
                <div className="price">
                  {product.oldPrice && <div className="old-price">${product.oldPrice}</div>}
                  <div className="current-price">${product.price}</div>
                </div>
                <div className="quantity">
                  <div className="count-button" onClick={removeProductCart}>
                    -
                  </div>
                  <div className="count">{product.quantity}</div>
                  <div className="count-button" onClick={addProductCart}>
                    +
                  </div>
                </div>
              </div>
              <div className="total-price">{(product.price * product.quantity).toFixed(2)}</div>
            </div>
            <div className="close" onClick={deleteProductCart}>
              X
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
