import React from "react";
import { Search } from "./components/search";
import { Categories } from "./components/categories";
import { Price } from "./components/price";
import { Colors } from "./components/colors";
import { ReviewedProducts } from "./components/reviewedProducts";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <Search/>
            <div className="sidebar-item">
                <Categories/>
            </div>
            <div className="sidebar-item">
                <Price/>
            </div>
            <div className="sidebar-item">
                <Colors/>
            </div>
            <div className="sidebar-item">
                <div className="button-wrapper">
                    <button className="button" id="apply-filter" disabled>Apply filter</button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="sidebar-item">
                <ReviewedProducts/>
            </div>
            <div>
                <a href="">
                    <img src="./images/banner.svg" alt="banner" />
                </a>
            </div>
        </div>
    )
}