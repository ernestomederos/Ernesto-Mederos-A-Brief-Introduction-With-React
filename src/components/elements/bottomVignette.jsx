import React from "react";
import bottomVignette from "../../assets/canvas/vignette-bottom.png";

function BottomVignette() {
    return (
        <div className="vignette-container vignette-left">
            <img data-aos="zoom-in" src={bottomVignette} className="vignette" alt="vignette" height="40px" />
        </div>
    )
}

export default BottomVignette;