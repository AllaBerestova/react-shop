import React, { useState } from "react";

export const Categories = ({onCategory}) => {
    const [activeCategory, setActiveCategory] = useState('All')

    const changeCategory= (e) => {
        setActiveCategory(e.target.dataset.category)
        onCategory(e.target.dataset.category)
    }


    return <>
        <div className="sidebar-title">Categories</div>
        <div className="sidebar-content">
            <ul className="custom-list">
                <li className={`item ${activeCategory === 'All' ? 'active' : ''}`} 
                    onClick={changeCategory} 
                    data-category="All">All
                </li>
                <li className={`item ${activeCategory === 'Men' ? 'active' : ''}`} 
                    onClick={changeCategory} 
                    data-category="Men">Men
                </li>
                <li className={`item ${activeCategory === 'Women' ? 'active' : ''}`} 
                    onClick={changeCategory} 
                    data-category="Women">Women
                </li>
                <li className={`item ${activeCategory === 'Accessories' ? 'active' : ''}`}
                    onClick={changeCategory} 
                    data-category="Accessories">Accessories
                </li>
                <li className={`item ${activeCategory === 'New Arrivals' ? 'active' : ''}`} 
                    onClick={changeCategory} 
                    data-category="New Arrivals">New Arrivals
                </li>
            </ul>
        </div>
    </>
}