import React from "react";
import "./LinkToDownload.css";
import WorkflowGuide from "../../assets/docs/12STEPS.pdf";
import DoubleArrowGold from "../../assets/canvas/double-arrow-gold.png";
function LinkToDownload() {
    return (
        <div className="external-link-container">
            <a className="external-link" href={WorkflowGuide} download="MEG4DEV-12-STEPS-WORKFLOW-GUIDE">
                CLICK TO DOWNLOAD!
            </a>
            <img className="double-arrow-gold" src={DoubleArrowGold} alt="arrow" height="30px" />
        </div>

    )
}

export default LinkToDownload;