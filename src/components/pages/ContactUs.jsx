import React from "react";
import CenteredSection from "../layouts/centeredSection";
import H2 from "../elements/h2";
import P from "../elements/p";
import TopVignette from "../elements/topVignette";
import Form from "../elements/Form";
import DownArrow from "../elements/downArrow";
import VerticallyCenteredContainer from "../layouts/verticallyCenteredContainer";


const contactData = {
    pageNumber: "I",
    headline2: "CONTACT US",
    subtitle: "AND LET US MAKE YOUR PROJECT SHINE!",
    paragraph1: "Ready to take your digital presence to the next level? At MEG4DEV, we specialize in crafting custom web solutions that not only meet your needs but exceed your expectations. Whether you’re a startup looking to establish a strong online foundation or an established business aiming to optimize and scale, we are here to help. Our goal is to deliver high-quality, user-centric websites that drive results and reflect your brand’s unique identity",
    paragraph2: "Let’s start the conversation today! Reach out through the form below, and I’ll personally ensure we get back to you promptly. Whether you have a detailed project in mind or just want to explore possibilities, MEG4DEV is here to make it happen. Let's build something great together.",
    paragraph3: "— Ernesto Mederos Garcia, Founder & Lead Developer at MEG4Dev"



}

const pageNumber = contactData.pageNumber;
const headline2 = contactData.headline2;
const subtitle = contactData.subtitle;
const paragraph1 = contactData.paragraph1;
const paragraph2 = contactData.paragraph2;
const paragraph3 = contactData.paragraph3;

function ContactMe() {
    return (
        <CenteredSection>
            <P text={pageNumber} />
            <TopVignette />
            <VerticallyCenteredContainer>
                <H2 text={headline2} />
                <strong><P text={subtitle} /></strong>
            </VerticallyCenteredContainer>
            <DownArrow />
            <P text={paragraph1} />
            <P text={paragraph2} />
            <P text={paragraph3} />
            <DownArrow />

            <Form />
                   <DownArrow /> 
        </CenteredSection >


    )
}

export default ContactMe;