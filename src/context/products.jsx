import React, { createContext, useContext, useState } from "react";

export const ProductsContext = createContext()

export const useProducts = () => {
    return useContext(ProductsContext)
}

export const ProductsProvider = ({ children }) => {
    const [basketCount, setBasketCount] = useState(() => {
        const basketItems = JSON.parse(localStorage.getItem('product-in-basket')) || []
        return basketItems.reduce((acc, item) => acc + (item.quantity), 0)
    })
    const [favoriteCount, setFavoriteCount] = useState(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('product-in-favorite')) || []
        return favoriteItems.length
    })


    return (
        <ProductsContext.Provider value={{ basketCount, favoriteCount, setBasketCount, setFavoriteCount }}>
            {children}
        </ProductsContext.Provider>
    )
}
