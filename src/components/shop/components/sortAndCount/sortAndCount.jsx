import React from "react";

export const SortAndCount = () => {
    return <>
        <div className="sort-and-count">
            <div className="products-count">
                There are <span id="products-count" className="bold">loading...</span> products in this category
            </div>
            <div className="sort">
                <select className="input" id="sort">
                    <option value="RELEVANCE">Relevance</option>
                    <option value="ASC">ASC</option>
                    <option value="DESK">DESK</option>
                </select>
            </div>
        </div>
    </>
}