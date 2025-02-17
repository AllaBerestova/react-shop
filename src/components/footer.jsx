import React from "react"
import './footer.css'
import './commons.css'



const FooterContainer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-info">
                    <div className="point-mini">
                        <img src="/images/point-mini.svg" alt="point-mini" />
                    </div>
                    <div className="point-middle">
                        <img src="/images/point-middle.svg" alt="point-middle" />
                    </div>
                    <div className="column column-1">
                        <div className="logo-footer">
                            <img src="/images/logo.svg" alt="" />
                        </div>
                        <div className="about-brand">
                            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate.
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
                    <div className="column column-2">
                        <div className="title">About</div>
                        <ul className="custom-list">
                            <li className="item"><a href="#">About us</a></li>
                            <li className="item"><a href="#">Collections</a></li>
                            <li className="item"><a href="#">Shop</a></li>
                            <li className="item"><a href="#">Blog</a></li>
                            <li className="item"><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                    <div className="column column-3">
                        <div className="title">Useful links</div>
                        <ul className="custom-list">
                            <li className="item"><a href="#">Privacy Policy</a></li>
                            <li className="item"><a href="#">Terms of use</a></li>
                            <li className="item"><a href="#">Support</a></li>
                            <li className="item"><a href="#">Shipping details</a></li>
                            <li className="item"><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="column column-4">
                        <div className="title">Newsletter</div>
                        <div className="newsletter-text">
                            Subscribe to be the first to hear about deals, offers and upcoming collections.
                        </div>
                        <div className="newsletter-form">
                            <form action="">
                                <label>
                                    <input type="text" placeholder="Enter your email" className="input" />
                                    <img src="/images/send.svg" alt="send" className="send-icon" />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div>
                        © All right reserved. Fashionee 2020
                    </div>
                    <div className="payment-method-container">
                        <div>
                            Payment methods:
                        </div>
                        <div className="payment-methods">
                            <div className="payment-method">
                                <img src="/images/visa.svg" alt="Visa" />
                            </div>
                            <div className="payment-method">
                                <img src="/images/mastercard.svg" alt="MacterCard" />
                            </div>
                            <div className="payment-method">
                                <img src="/images/paypal.svg" alt="Paypal" />
                            </div>
                            <div className="payment-method">
                                <img src="/images/payoneer.svg" alt="Payoneer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default FooterContainer