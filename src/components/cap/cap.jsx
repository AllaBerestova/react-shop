import React from "react";
import './cap.css'
import '../commons.css'
import { CapMenuItems } from "./components/capMenuItems";

const Cap = ({currentPage}) => {
    return (
        <div className="container">
            <div className="cap">
                <div className="cap-menu">
                    <div className="horizontal-line"></div>
                    <div className="point">
                        <img src="./images/point.svg" alt="point" />
                    </div>
                    <CapMenuItems currentPage={currentPage}/>
                </div>
                <div className="cap-photo"></div>
            </div>
        </div>
    )
}

export default Cap