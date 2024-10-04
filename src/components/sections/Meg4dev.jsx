import React from "react";
import CenteredSection from "../layouts/centeredSection";
import "./Meg4dev.css";
import TopKey from "../elements/topKey";
import BottomKey from "../elements/bottomKey";
import H1 from "../elements/h1";
import P from "../elements/p";
import DownArrow from "../elements/downArrow";
import CenteredContainer from "../layouts/centeredContainer";
import Data from "../elements/Data";

const title = Data.presentation.title;
const text = Data.presentation.text;
function Meg4dev() {

    return (

        <CenteredSection><TopKey />
            <CenteredContainer>
                <H1 text={title} />
            </CenteredContainer>
            <P className="" text={text}/>
            <BottomKey />
            <DownArrow />
        </CenteredSection>


    )
}

export default Meg4dev;