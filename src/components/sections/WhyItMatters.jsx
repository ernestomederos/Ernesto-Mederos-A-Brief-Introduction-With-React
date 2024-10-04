import React from "react";
import "./WhyItMatters.css";
import CenteredSection from "../layouts/centeredSection";
import P from "../elements/p";
import CenteredContainer from "../layouts/centeredContainer";
import H2 from "../elements/h2";
import DownArrow from "../elements/downArrow";
import H3 from "../elements/h3";
import Data from "../elements/Data";

const pageNumber = Data.whyItMatters.pageNumber;
const headline2 = Data.whyItMatters.headline2;
const subtitle = Data.whyItMatters.subtitle;
const items = Data.whyItMatters.steps;

function WhyItMatters() {

    return (
        <CenteredSection>
            <P text={pageNumber} />
            <CenteredContainer>
                <H2 text={headline2} />
               <P text={subtitle} />
            </CenteredContainer>
            {items.map((item) => {
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

export default WhyItMatters;

