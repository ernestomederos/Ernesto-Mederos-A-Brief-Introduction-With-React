import React from "react";
import CenteredContainer from "../layouts/centeredContainer";

function Image({itemUrl, alternativeText, height}) {
    return (
        <CenteredContainer>
            <img data-aos="zoom-out" src={itemUrl} alt={alternativeText} height={height} />
        </CenteredContainer>
    )
}

export default Image;