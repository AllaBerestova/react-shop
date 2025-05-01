import React from "react";

export const ReviewedProducts = ({ products }) => {
  let randomThreeProducts = [...products];

  const getRandomProducts = (randomThreeProducts) => {
    const shuffled = randomThreeProducts.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };
  const randomProducts = getRandomProducts(randomThreeProducts);

  return (
    <>
      <div className="sidebar-title">Reviewed by you</div>
      <div className="sidebar-content">
        <div className="reviewed-products">
          {randomProducts.map((product) => (
            <div className="product" key={product.id}>
              <div className="image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="info">
                <div className="name">{product.name}</div>
                <div className="price">
                  <div className="current-price">${product.price}</div>
                  {product.oldPrice && <div className="old-price">${product.oldPrice}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
