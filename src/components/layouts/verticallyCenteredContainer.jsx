import React from "react";

function VerticallyCenteredContainer({ children }) {
    return (
        <div className="centered-container column">
            {children}
        </div>
    )
}

export default VerticallyCenteredContainer;
