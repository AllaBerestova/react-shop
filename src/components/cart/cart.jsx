import React, { useState } from "react";
import "./cart.css";
import { ProductCart } from "./components/productCart";
import { Order } from "./components/order";
import { Promocode } from "./components/promocode";
import { currentPromocode, PRODUCT_IN_BASKET_KEY } from "../../constants/constants";
import { getFromLS } from "../../utils/function";

const Cart = () => {

  const [productsCart, setProductsCart] = useState(getFromLS(PRODUCT_IN_BASKET_KEY));
  const [discount, setDiscount] = useState(0);

  const handleDiscount = (promocode) => {
    if (promocode === currentPromocode) {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  return (
    <div className="container mw-1140">
      <div className="cart">
        <div className="order-wrapper">
          <ProductCart productsCart={productsCart} setProductsCart={setProductsCart} />
          <Order productsCart={productsCart} discount={discount} />
        </div>
        <Promocode onApplyPromo={handleDiscount} />
      </div>
    </div>
  );
};

export default Cart;
