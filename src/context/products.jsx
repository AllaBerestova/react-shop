import React, { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext()

export const useProducts = () => {
    return useContext(ProductsContext)
}

export const ProductsProvider = ({ children }) => {
    const [basketCount, setBasketCount] = useState(0)
    const [favoriteCount, setFavoriteCount] = useState(0)

    

    useEffect(() => {

        const updateCounts = () => {
            const basketItems = JSON.parse(localStorage.getItem('product-in-basket')) || []
            const favoriteItems = JSON.parse(localStorage.getItem('product-in-favorite')) || []
            const totalBasketQuantity = basketItems.reduce((acc, item) => acc + (item.quantity), 0)
            setBasketCount(totalBasketQuantity)
            setFavoriteCount(favoriteItems.length)
        }

        updateCounts()

        // Обновление при изменении localStorage
        window.addEventListener('storage', updateCounts)
        return () => {
            window.removeEventListener('storage', updateCounts)
        }
    }, [])

    return (
        <ProductsContext.Provider value={{ basketCount, favoriteCount, setBasketCount, setFavoriteCount }}>
            {children}
        </ProductsContext.Provider>
    )
}
