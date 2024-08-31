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

const fullstackData = {
    pageNumber: "I",
    headline2: "Development",
    subtitle: "TRANSFORMING IDEAS INTO SEAMLESS DIGITAL SOLUTIONS",
    paragraph1: "We specialize in the MERN stack -MongoDB, Express.js, React, Node.js, plus MySQL-, providing end-to-end solutions that cover both front-end and back-end development. Whether you need a robust web application or a dynamic, responsive website, We’ve got the expertise to bring your vision to life.",
    headline3: "What We Offer:",
    steps: [
        { headline4: "Custom Web Applications", paragraph2: "Tailored to your specific needs, from simple landing pages to complex web applications." },
        { headline4: "API Development and Integration", paragraph2: "Building and integrating RESTful APIs to ensure seamless communication between your application and external services." },
        { headline4: "Performance Optimization", paragraph2: "Ensuring your web applications are fast, responsive, and scalable to handle growth." }
    ],

}

const pageNumber = fullstackData.pageNumber;
const headline2 = fullstackData.headline2;
const subtitle = fullstackData.subtitle;
const items = fullstackData.steps;
const paragraph1 = fullstackData.paragraph1;
const headline3 = fullstackData.headline3;

function FullStack() {
    return (
        <CenteredSection>
            <P text={pageNumber} />
            <CenteredContainer>
                <H2 text={headline2} />
                <strong><P text={subtitle} /></strong>
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

export default FullStack;