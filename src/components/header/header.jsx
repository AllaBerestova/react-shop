import React from "react";
import { useProducts } from "../../context/index";
import "./header.css";
import "../commons.css";

const Header = ({ togglePage }) => {
  const { basketCount, favoriteCount } = useProducts();

  return (
    <div className="container">
      <header className="header">
        <div className="left-side">
          <div className="logo-container">
            <div className="burger-menu">
              <input type="checkbox" id="burger-checkbox" className="burger-checkbox" />
              <label className="burger" htmlFor="burger-checkbox"></label>
            </div>
            <div className="logo">
              <img src="/images/logo.svg" alt="" />
            </div>
          </div>
          <div className="menu">
            <div className="menu-item">
              <span>Home</span>
            </div>
            <div className="menu-item">
              <span>Pages</span>
              <img src="./images/arrow.svg" alt="" className="arrow-default" />
              <img src="./images/arrowPink.svg" alt="" className="arrow-hover" />
            </div>
            <div className="menu-item active">
              <span onClick={() => togglePage("shop")}>Shop</span>
              <img src="./images/arrow.svg" alt="" className="arrow-default" />
              <img src="./images/arrowPink.svg" alt="" className="arrow-hover" />
            </div>
            <div className="menu-item">
              <span>Blog</span>
            </div>
            <div className="menu-item">
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="header-icon">
            <img src="./images/iconSearch.svg" alt="" />
          </div>
          <div className="header-icon">
            <img src="./images/iconProfile.svg" alt="" />
          </div>
          <div className="header-icon">
            <img src="./images/iconFavorites.svg" alt="" />
            <div className="counter">
              <span>{favoriteCount}</span>
            </div>
          </div>
          <div className="header-icon" onClick={() => togglePage("cart")}>
            <img src="./images/iconCart.svg" alt="" />
            <div className="counter">{basketCount}</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
