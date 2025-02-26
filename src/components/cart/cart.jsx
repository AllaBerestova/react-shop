import React from "react"
import './cart.css'

const Cart = () => {
    return(
        <div className="container mw-1140">
        <div className="cart">
            <div className="order-wrapper">
                <div className="product-list js-cart">
                    <div className="product"></div>
                </div>
                <div className="order">
                    <div className="title">Your order</div>
                    <div className="order-price-wrapper">
                        <div className="price-row">
                            <div className="name">Оrder price</div>
                            <div className="price" id = "js-price-order">$0</div>
                        </div>
                        <div className="price-row">
                            <div className="name">Discount for promo code</div>
                            <div id="js-promo-apply">No</div>
                        </div>
                        <div className="price-row delimiter">
                            <div className="name">Delivery
                                <span className="additional" id="js-time">(Aug 02 at 16:00)</span>
                            </div>
                            <div className="price" id="js-delivery">$0</div>
                        </div>
                        <div className="price-row total">
                            <div className="name">Total</div>
                            <div className="price" id = "js-price-total-order">$0</div>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <button className="button">Checkout</button>
                        <div className="vertical-line"></div>
                    </div>
                </div>
            </div>
            <div className="promo-code-wrapper">
                <div className="info">
                    <div className="title">You Have A Promo Code?</div>
                    <div className="description">To receive up-to-date promotional codes, subscribe to us on social networks.</div>
                </div>
                <div className="promo-code">
                    <input type="text" name="promo-code" className="input" placeholder="Enter promo code" id="js-promocode"/>
                    <div className="button-wrapper">
                        <button className="button" id="js-btn-promocode">
                            <img src="./images/promo-code-arrow.svg" alt="arrow"/>
                        </button>
                        <div className="vertical-line"></div>
                    </div>
                </div>
                <div className="find-us">
                    <div className="find-us-text">Find us here:</div>
                    <div className="find-us-links">
                        <div className="find-us-link">
                            <a href="">FB</a>
                        </div>
                        <div className="line"></div>
                        <div className="find-us-link">
                            <a href="">TW</a>
                        </div>
                        <div className="line"></div>
                        <div className="find-us-link">
                            <a href="">INS</a>
                        </div>
                        <div className="line"></div>
                        <div className="find-us-link">
                            <a href="">PT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    )
}

export default Cart