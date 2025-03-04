import React from "react";
import './shop.css'
import Product from './components/product/products'
import productsData from '../../products.json'
import { Pagination } from "./components/pagination/pagination";
import { Sidebar } from "./components/sidebar/sidebar";
import { SortAndCount } from "./components/sortAndCount/sortAndCount";


const Shop = () => {
    return(
            <div className="container mw-1140">
                <div className="shop">
                    <Sidebar/>
                    <div className="products-wrapper">
                        <SortAndCount/>
                        <div className="products">
                           {productsData.products.map((product) => {
                               return <Product key={product.id} product={product} />
                            })}
                        </div>
                        <Pagination/>
                    </div>
                </div>
            </div>
    )
}

export default Shop