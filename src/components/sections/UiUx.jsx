import React from "react";
import "./WhatWeDo.css";
import CenteredSection from "../layouts/centeredSection";
import P from "../elements/p";
import CenteredContainer from "../layouts/centeredContainer";
import VerticallyCenteredContainer from "../layouts/verticallyCenteredContainer";
import H2 from "../elements/h2";
import H4 from "../elements/h4";
import DownArrow from "../elements/downArrow";
import H3 from "../elements/h3";

const uiuxData = {
    pageNumber: "III",
    headline2: "UI/UX",
    subtitle: "BEAUTIFUL INTERFACES, INTUITIVE EXPERIENCES",
    paragraph1: "While our primary focus is development, we understand the importance of design. Drawing inspiration from the best in the field, we create interfaces that are not only functional but also visually appealing. We bridge the gap between design and development, ensuring that your users have a seamless and enjoyable experience.",
    headline3: "What We Offer:",
    steps: [
        { headline4: "Responsive Web Design", paragraph2: "Crafting interfaces that look and feel great on any device." },
        { headline4: "UI/UX Prototyping", paragraph2: "Turning ideas into interactive prototypes, refining the user experience before development begins." },
        { headline4: "Front-End Integration", paragraph2: "Bringing designs to life with React, ensuring that your application is both beautiful and functional." }
    ],

}

const pageNumber = uiuxData.pageNumber;
const headline2 = uiuxData.headline2;
const subtitle = uiuxData.subtitle;
const items = uiuxData.steps;
const paragraph1 = uiuxData.paragraph1;
const headline3 = uiuxData.headline3;

function UiUx () {
    return (
        <CenteredSection>
            <P text={pageNumber} />
            <CenteredContainer>
                <H2 text={headline2} />
                <P text={subtitle} />
            </CenteredContainer>
            <P text={paragraph1}></P>
            <VerticallyCenteredContainer>
            <DownArrow />
                <H3 text={headline3} />
                {items.map(item => {
                    return (
                        <>
                            <H4 text={item.headline4} />
                            <P text={item.paragraph2}/>
                        </>
                    )
                })}
            </VerticallyCenteredContainer>
            <DownArrow />
        </CenteredSection>

    )
}

export default UiUx;