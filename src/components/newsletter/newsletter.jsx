import React from "react";
import "./newsletter.css";
import "../commons.css";

const Newsletter = () => {
  return (
    <div className="container news">
      <div className="container-newsletter">
        <div className="newsletter">
          <div className="point">
            <img src="./images/point-mini.svg" alt="point" />
          </div>
          <div className="newsletter-info">
            <div className="newsletter-title">Newsletter</div>
            <div className="newsletter-text">Be the first to hear about deals, offers and upcoming collections.</div>
            <div className="send-email">
              <input type="text" placeholder="Enter your email" className="input" />
              <div className="button-wrapper">
                <button className="button">Subscribe</button>
                <div className="vertical-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
