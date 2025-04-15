import React, {useState, useCallback} from "react";
import { Search } from "./components/search";
import { Categories } from "./components/categories";
import { Price } from "./components/price";
import { Colors } from "./components/colors";
import { ReviewedProducts } from "./components/reviewedProducts";

export const Sidebar = ({products, setFilteredProducts}) => {

    const [searchValue, setSearchValue] = useState('');
    const [minPrice, setMinPrice] = useState(undefined);
    const [maxPrice, setMaxPrice] = useState(undefined);
    const [colors, setColors] = useState([])
    const [categories, setCategories] = useState('All')

    const filterProducts = useCallback(() => {

        let filteredProducts = products

        if(searchValue) {
            filteredProducts = filteredProducts.filter((product) =>
                product.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        }

        if(minPrice || maxPrice){
            filteredProducts = filteredProducts.filter((product) => 
                product.price >= minPrice && product.price <= maxPrice
            )
        }

        if(colors.length > 0){
            filteredProducts = filteredProducts.filter((product) => 
                colors.includes(product.color)
            )
        }

        if(categories && categories !== 'All'){
            if(categories === 'New Arrivals'){
                filteredProducts = filteredProducts.filter((product) => 
                    product.isNew === true
                )
            } else {
            filteredProducts = filteredProducts.filter((product) => 
                product.categories.includes(categories) 
            )
            }
            
        }
       
        
        setFilteredProducts(filteredProducts)

    }, [searchValue, minPrice, maxPrice, colors, categories, products, setFilteredProducts])

    

    const handleApplyBtn = () => {
        filterProducts()
    }

    const handleSearch = (value) => {
        setSearchValue(value)
    }

    const handlePrice = (min, max) => {
        setMinPrice(min);
        setMaxPrice(max);
    }

    const handleColor = (color) => {
        setColors(color)
    }

    const handleCategory = (category) => {
        setCategories(category)
    }

    return (
        <div className="sidebar">
            <Search onSearch={handleSearch}/>
            <div className="sidebar-item">
                <Categories onCategory={handleCategory}/>
            </div>
            <div className="sidebar-item">
                <Price 
                    onMinPrice={handlePrice} 
                    onMaxPrice={handlePrice}
                />
            </div>
            <div className="sidebar-item">
                <Colors onColors={handleColor}/>
            </div>
            <div className="sidebar-item">
                <div className="button-wrapper">
                    <button className="button"  onClick={handleApplyBtn}>Apply filter</button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="sidebar-item">
                <ReviewedProducts products={products}/>
            </div>
            <div>
                <a href="">
                    <img src="./images/banner.svg" alt="banner" />
                </a>
            </div>
        </div>
    )
}