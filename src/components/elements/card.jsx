import React from "react";

function Card({ children, animationKey, onMouseEnter, onMouseLeave }) {

    return (<div
        data-aos={animationKey % 2 === 0 ?
            "flip-right" : "flip-left"}
        className="card"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave} >
        {children}
    </div>)
}
export default Card;