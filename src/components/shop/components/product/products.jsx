import React from "react";
import { useBasketProducts } from "../../../../hooks/useBasketProducts";
import { useFavoriteProducts } from "../../../../hooks/useFavoriteProducts";

const Product = ({ product }) => {
  const { buyProduct } = useBasketProducts();
  const { isFavorite, toggleFavorite } = useFavoriteProducts(product);

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
