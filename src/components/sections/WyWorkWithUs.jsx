import React from "react";
import "./WhyItMatters.css";
import CenteredSection from "../layouts/centeredSection";
import P from "../elements/p";
import CenteredContainer from "../layouts/centeredContainer";
import H2 from "../elements/h2";
import DownArrow from "../elements/downArrow";
import H4 from "../elements/h3";
import RandomImageSeparator from "../randomImage";
import Data from "../elements/Data";

const pageNumber = Data.whyUs.pageNumber;
const headline2 = Data.whyUs.headline2;
const subtitle = Data.whyUs.subtitle;
const items = Data.whyUs.steps;

function WhyWorkWithUs() {

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
                        <CenteredContainer>
                            <H4 text={item.headline4} /><RandomImageSeparator />
                        </CenteredContainer>

                        <P text={item.paragraph1} />
                        <P text={item.paragraph2} />
                    </>
                )
            })}
            <DownArrow />
        </CenteredSection>

    )
}

export default WhyWorkWithUs;
