import React from "react";

function HorizontalScroll({ children }) {
    return (
        <div className="scrolling-wrapper">
            {children}
        </div>
    )
}

export default HorizontalScroll;