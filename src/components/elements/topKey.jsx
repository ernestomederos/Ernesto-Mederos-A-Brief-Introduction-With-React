import React from "react";
import topKey from "../../assets/images/key-top.png";


function TopKey() {

    return (
        <div className="header-img-container top">
            <img 
            data-aos="fade-down" 
            src={topKey} height="100px" alt="key" className="key-top" />
        </div>
    )
}

export default TopKey;