import React from "react";
import DownArrow from "../elements/downArrow";
import CenteredSection from "../layouts/centeredSection";
import CenteredContainer from "../layouts/centeredContainer";
import DoubleArrowGold from "../../assets/canvas/double-arrow-gold.png";
import "./Download12Steps.css";


function Download12() {

    return (
        <CenteredSection>
            <CenteredContainer>
                <a className="external-link" href="./portfolio.html">
                    12STEPS-WEB-WORKFLOW FOR FREE!
                </a>
                {/* <img className="double-arrow-gold" src={DoubleArrowGold} alt="arrow" height="30px" /> */}
            </CenteredContainer>
            <DownArrow />
        </CenteredSection>

    )
}

export default Download12;