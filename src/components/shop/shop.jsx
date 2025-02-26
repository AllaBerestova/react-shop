import React from "react";
import './shop.css'
import Product from '../products'
import productsData from '../../products.json'


const Shop = () => {
    return(
            <div className="container mw-1140">
                <div className="shop">
                    <div className="sidebar">
                        <div className="search">
                            <label>
                                <input type="text" placeholder="Search" className=" input search-row" id="search-row" />
                                <img src="./images/iconSearch.svg" alt="Search" className="search-icon" />
                            </label>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-title">Categories</div>
                            <div className="sidebar-content">
                                <ul className="custom-list">
                                    <li className="item js-category active" data-category="All">All</li>
                                    <li className="item js-category" data-category="Men">Men</li>
                                    <li className="item js-category" data-category="Women">Women</li>
                                    <li className="item js-category" data-category="Accessories">Accessories</li>
                                    <li className="item js-category" data-category="New Arrivals">New Arrivals</li>
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-title">Price</div>
                            <div className="sidebar-content">
                                <div className="price-bar">
                                    <input type="number" placeholder="0" className="input" id="js-price-min" />
                                    <input type="number" placeholder="999999" className="input" id="js-price-max" />
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-title">Colors</div>
                            <div className="sidebar-content">
                                <div className="colors">
                                    <div className="color">
                                        <input type="checkbox" className="color-checkbox js-color" id="black" name="black" value="Black" />
                                        <label htmlFor="black" className="color-name">Black</label>
                                    </div>
                                    <div className="color">
                                        <input type="checkbox" className="color-checkbox js-color" id="blue" name="blue" value="Blue" />
                                        <label htmlFor="blue" className="color-name">Blue</label>
                                    </div>
                                    <div className="color">
                                        <input type="checkbox" className="color-checkbox js-color" id="red" name="red" value="Red" />
                                        <label htmlFor="red" className="color-name">Red</label>
                                    </div>
                                    <div className="color">
                                        <input type="checkbox" className="color-checkbox js-color" id="yellow" name="yellow" value="Yellow" />
                                        <label htmlFor="yellow" className="color-name">Yellow</label>
                                    </div>
                                    <div className="color">
                                        <input type="checkbox" className="color-checkbox js-color" id="green" name="green" value="Green" />
                                        <label htmlFor="green" className="color-name">Green</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="button-wrapper">
                                <button className="button" id="apply-filter" disabled>Apply filter</button>
                                <div className="vertical-line"></div>
                            </div>
                        </div>
                        <div className="sidebar-item">
                            <div className="sidebar-title">Reviewed by you</div>
                            <div className="sidebar-content">
                                <div className="reviewed-products js-reviewed-products">
                                    <div className="product">
                                        <div className="image"></div>
                                        <div className="info">
                                            <div className="name">Retro style handbag</div>
                                            <div className="price">
                                                <div className="current-price">$35.99</div>
                                                <div className="old-price">$52.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="image"></div>
                                        <div className="info">
                                            <div className="name">Warm casual sweater</div>
                                            <div className="price">
                                                <div className="current-price">$35.99</div>
                                                <div className="old-price">$52.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="image"></div>
                                        <div className="info">
                                            <div className="name">Textured turtleneck with zip</div>
                                            <div className="price">
                                                <div className="current-price">$35.99</div>
                                                <div className="old-price">$52.99</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href="">
                                <img src="./images/banner.svg" alt="banner" />
                            </a>
                        </div>
                    </div>
                    <div className="products-wrapper">
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
                        <div className="products js-products">
                           {productsData.products.map((product) => {
                               return <Product key={product.id} product={product} />
                            })}
                        </div>
                        <div className="pagination" id="pagination">
                            <div className="button-left" id="js-button-left">
                                <img src="./images/left-arrow.svg" alt="left-arrow" />
                            </div>
                            <div className="pages js-pages" ></div>
                            <div className="button-right" id="js-button-right">
                                <img src="./images/right-arrow.svg" alt="right-arrow" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Shop