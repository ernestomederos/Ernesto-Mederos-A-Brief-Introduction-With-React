import React from "react";
import "./TheHOW.css";
import CenteredSection from "../layouts/centeredSection";
import P from "../elements/p";
import CenteredContainer from "../layouts/centeredContainer";
import H2 from "../elements/h2";
import DownArrow from "../elements/downArrow";
import H3 from "../elements/h3";
import Data from "../elements/Data";

const pageNumber = Data.theHOW.pageNumber;
const headline2 = Data.theHOW.headline2;
const subtitle = Data.theHOW.subtitle;
const items = Data.theHOW.steps;

function TheHOW() {

    return (
        <CenteredSection>
            <P text={pageNumber} />
            <CenteredContainer>
                <H2 text={headline2} />
                <P text={subtitle} />
            </CenteredContainer>
         
            {items.map(item => {
                return (
                    <> <DownArrow />
                        <H3 text={item.headline3} />
                        <P text={item.paragraph} />
                    </>
                )
            })}
            <DownArrow />
        </CenteredSection>

    )
}

export default TheHOW;

