import React from "react";
import WorkflowGuide from "../../assets/docs/12STEPS.pdf";
import DownArrow from "../elements/downArrow";
import CenteredSection from "../layouts/centeredSection";
import CenteredContainer from "../layouts/centeredContainer";
import DoubleArrowGold from "../../assets/canvas/double-arrow-gold.png";
import "./Download12Steps.css";


function Download12() {

    return (
        <CenteredSection>
            <CenteredContainer>
                <a className="external-link" href={WorkflowGuide} download="MEG4DEV-12-STEPS-WORKFLOW-GUIDE">
                    CLICK TO DOWNLOAD!
                </a>
                <img className="double-arrow-gold" src={DoubleArrowGold} alt="arrow" height="30px" />
            </CenteredContainer>
            <DownArrow />
        </CenteredSection>

    )
}

export default Download12;