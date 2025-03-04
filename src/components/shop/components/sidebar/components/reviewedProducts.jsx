import React from "react";

export const ReviewedProducts = () => {
    return <>
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
    </>
}