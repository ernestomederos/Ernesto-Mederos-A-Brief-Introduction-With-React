import React from "react";
import "./WhatWeDo.css";
import CenteredSection from "../layouts/centeredSection";
import P from "../elements/p";
import CenteredContainer from "../layouts/centeredContainer";
import Image from "../elements/img";
import H2 from "../elements/h2";
import DownArrow from "../elements/downArrow";
import H3 from "../elements/h3";
import Data from "../elements/Data";

const pageNumber = Data.whatWeDo.pageNumber;
const headline2 = Data.whatWeDo.headline2;
const subtitle = Data.whatWeDo.subtitle;
const items = Data.whatWeDo.steps;

function WhatIDo() {

    return (
        <CenteredSection>
            <P text={pageNumber} />
            <CenteredContainer>
                <H2 text={headline2} />
                <P text={subtitle} />
            </CenteredContainer>
            {items.map(item => {
                return (
                    <>
                        <DownArrow />
                        <H3 text={item.headline3} />
                        <P text={item.paragraph} />
                        <Image itemUrl={item.pic} alternativeText={item.headline3} height="200" />
                    </>
                )
            })}
            <DownArrow />
        </CenteredSection>

    )
}

export default WhatIDo;

