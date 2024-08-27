import React from "react";
import topVignette from "../../assets/canvas/vignette-top.png";

function TopVignette() {
    return (
        <div data-aos="fade-in" className="vignette-container vignette-right">
            <img src={topVignette} className="vignette" alt="vignette" height="40px" />
        </div>
    )
}

export default TopVignette;