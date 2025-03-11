import React from "react";

export const CapMenuItems = ({ currentPage }) => {
    return (
        <div className="menu-items">
            {currentPage === 'shop' ? (
                <>
                    <div className="cap-title">Shop</div>
                    <div className="cap-items">
                        <div className="vertical-line"></div>
                        <div className="cap-item">Home</div>
                        <div className="cap-item active">Shop</div>
                    </div>
                </>) : (
                <>
                    <div className="cap-title">Cart</div>
                    <div className="cap-items">
                        <div className="vertical-line"></div>
                        <div className="cap-item">Home</div>
                        <div className="cap-item">Shop</div>
                        <div className="cap-item active">Cart</div>
                    </div>
                </>)}
        </div>
    )
}