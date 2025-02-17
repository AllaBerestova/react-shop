import React, {useEffect, useState} from "react"

//ключ для избранного:
const PRODUCT_IN_FAVORITE_KEY = 'product-in-favorite'  


const PRODUCT_IN_BASKET_KEY = 'product-in-basket'

const getFromLS = (key) => {
  try{
    return JSON.parse(localStorage.getItem(key))
  }
  catch (e) {
    console.log(e)
    return null
  }
}

const setToLS = (key, value) => {
  try{
    localStorage.setItem(key, JSON.stringify(value))
  }
  catch (e){
    console.log(e)
  }
}

{/*const updateHeaderInfoFavorite = () => {
   
  //const FavoriteCounter = document.getElementsByClassName('js-favorite-counter')

  if (!FavoriteCounter.length){
    return false
  }

  const productsInFavorite = getFromLS(PRODUCT_IN_FAVORITE_KEY)

  if (!productsInFavorite) {
    return false
  }

  let countInFavoite = 0
  
  productsInFavorite.forEach((product) => {
    countInFavoite += product.quantity
  })

  FavoriteCounter[0].innerHTML = countInFavoite
}*/}

//добавляем в корзину:
const buyProduct = (product) => {
  const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY)  
  if (!productsInBasket) {                                    
    setToLS(PRODUCT_IN_BASKET_KEY, [{...product, quantity: 1}])  
    //updateHeaderInfo()  
    return true
  }

  let hasProductInBasket = false                       
  const updateProducts = productsInBasket.map((productInBasket) => {
    if (productInBasket.id === product.id) {                
      hasProductInBasket = true

      return {                                             
        ...productInBasket,
        quantity: productInBasket.quantity + 1
      }
    }

    return productInBasket
  })

  if (hasProductInBasket) {                      
    setToLS(PRODUCT_IN_BASKET_KEY, updateProducts) 
    //updateHeaderInfo()
    return true
  }

  productsInBasket.push({...product, quantity: 1})  
  setToLS(PRODUCT_IN_BASKET_KEY, productsInBasket)  
  //updateHeaderInfo()
}

//добавляем в избранное:
const addToFavorites = (product) => {
  const productsInFavorite = getFromLS(PRODUCT_IN_FAVORITE_KEY)
  
  
  if (!productsInFavorite) {
    setToLS(PRODUCT_IN_FAVORITE_KEY, [{...product, quantity: 1}])
    //updateHeaderInfoFavorite()
    return true
  }

  productsInFavorite.push({...product, quantity: 1})
  setToLS(PRODUCT_IN_FAVORITE_KEY, productsInFavorite)
  //updateHeaderInfoFavorite()
}

//удаляем из избранного:
const removeFromFavorites = (product) => {
  const productsInFavoriteDelete = getFromLS(PRODUCT_IN_FAVORITE_KEY)

  if (!productsInFavoriteDelete) {
    return false
  }

  const deleteFavorite = productsInFavoriteDelete.filter(item => (item.id !== product.id))
  setToLS(PRODUCT_IN_FAVORITE_KEY, deleteFavorite)
  //updateHeaderInfoFavorite()
  
}

const Product = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false)  //состояние для избранного
  

  useEffect(() => {
    const productsInFavorite = getFromLS(PRODUCT_IN_FAVORITE_KEY) || [];   
    setIsFavorite(productsInFavorite.some(item => item.id === product.id));  //обновляем состояние при изменении
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
            <img
              src={isFavorite ? './images/iconHeart.svg' : './images/iconFavorites.svg'}
              alt="Favorite Icon"
            />
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

export default Product

