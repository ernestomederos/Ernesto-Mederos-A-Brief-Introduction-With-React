import React from "react";
import LinkToDownload from "./LinkToDownload";
import DownArrow from "../elements/downArrow";
import CenteredSection from "../layouts/centeredSection";

import "./Download12Steps.css";


function Download12() {
    return (
        <CenteredSection>
            <LinkToDownload />
            <DownArrow />
        </CenteredSection>
    )
}

export default Download12;