import React from "react";
import downArrow from "../../assets/canvas/arrow.png";

function DownArrow() {
    return (
        <img data-aos="fade-down" src={downArrow} alt="arrow" className="down-arrow" height="40px" />
    )
}

export default DownArrow;