import React from "react";

export const Pagination = () => {
    return (
        <div className="pagination" id="pagination">
            <div className="button-left" id="js-button-left">
                <img src="./images/left-arrow.svg" alt="left-arrow" />
            </div>
            <div className="pages js-pages" ></div>
            <div className="button-right" id="js-button-right">
                <img src="./images/right-arrow.svg" alt="right-arrow" />
            </div>
        </div>
    )
}