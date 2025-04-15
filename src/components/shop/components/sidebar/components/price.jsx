import React, {useState} from "react";

export const Price = ({onMinPrice, onMaxPrice}) => {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(999999)

    const changeMinPrice = (e) => {
        const valueMin = Number(e.target.value)
        setMinPrice(valueMin)
        onMinPrice(valueMin, maxPrice)
    }

    const changeMaxPrice = (e) => {
        const valueMax = Number(e.target.value)
        setMaxPrice(valueMax)
        onMaxPrice(minPrice, valueMax)
    }

    return <>
        <div className="sidebar-title">Price</div>
        <div className="sidebar-content">
            <div className="price-bar">
                <input 
                type="number" 
                placeholder="0" 
                className="input"
                value={minPrice}
                onChange={changeMinPrice}
                />
                <input 
                type="number" 
                placeholder="999999" 
                className="input"
                value={maxPrice}
                onChange={changeMaxPrice}
                />
            </div>
        </div>
    </>
}