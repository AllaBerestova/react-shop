import React, { useState } from "react";

export const Promocode = ({ onApplyPromo }) => {
  const [promoValue, setpromoValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setpromoValue(value);
  };

  const handleBtn = () => {
    onApplyPromo(promoValue);
    setpromoValue("");
  };

  return (
    <div className="promo-code-wrapper">
      <div className="info">
        <div className="title">You Have A Promo Code?</div>
        <div className="description">To receive up-to-date promotional codes, subscribe to us on social networks.</div>
      </div>
      <div className="promo-code">
        <input
          type="text"
          name="promo-code"
          className="input"
          placeholder="Enter promo code"
          value={promoValue}
          onChange={handleInputChange}
        />
        <div className="button-wrapper">
          <button className="button" onClick={handleBtn}>
            <img src="./images/promo-code-arrow.svg" alt="arrow" />
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
  );
};
