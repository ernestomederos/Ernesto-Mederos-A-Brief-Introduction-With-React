import React from "react";

function Card({ children, animationKey, onMouseEnter, onMouseLeave }) {

    return (<div
        // data-aos={animationKey % 2 === 0 ?
            // "fade-right" : "fade-left"}
        className="card"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} >
        {children}
    </div>)
}
export default Card;