import React, {useState} from "react";

export const Price = () => {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)

    const changeMinPrice = (e) => {
        setMinPrice(e.target.value)
    }

    const changeMaxPrice = (e) => {
        setMaxPrice(e.target.value)
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