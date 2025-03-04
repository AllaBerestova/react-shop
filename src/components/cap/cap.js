import React from "react";
import './cap.css'
import '../commons.css'

const Cap = ({currentPage}) => {
    return (
        <div className="container">
            <div className="cap">
                <div className="cap-menu">
                    <div className="horizontal-line"></div>
                    <div className="point">
                        <img src="./images/point.svg" alt="point" />
                    </div>
                    <div className="menu-items">
                        {currentPage === 'shop' && (<>
                        <div className="cap-title">Shop</div>
                        <div className="cap-items">
                            <div className="vertical-line"></div>
                            <div className="cap-item">Home</div>
                            <div className="cap-item active">Shop</div>
                        </div></>)}
                        {currentPage === 'cart' && (<>
                        <div className="cap-title">Cart</div>
                        <div className="cap-items">
                            <div className="vertical-line"></div>
                            <div class="cap-item">Home</div>
                            <div class="cap-item">Shop</div>
                            <div class="cap-item active">Cart</div>
                        </div></>)}
                    </div>
                </div>
                <div className="cap-photo"></div>
            </div>
        </div>
    )
}

export default Cap