import React from "react";
import "./TheHOW.css";
import CenteredSection from "../layouts/centeredSection";
import P from "../elements/p";
import CenteredContainer from "../layouts/centeredContainer";
import H2 from "../elements/h2";
import DownArrow from "../elements/downArrow";
import H3 from "../elements/h3";

const theHOWData = {
    pageNumber: "I",
    headline2: "TH3HOW",
    subtitle: "HOW WE GO FROM 'NOTHING' TO 'STUNNING' IN 3 'HOW's",
    steps: [
        { headline3: "1. Harnessing It", paragraph: "Think of this as our first date—no awkward silences allowed! We’re here to get to know your vision inside and out. We’ll chat, ask quirky questions, and really dig into what makes your project tick. It’s all about making sure we’re on the same page before we start writing the book" },
        { headline3: "2. Optimizing It", paragraph: "This is where we build and tweak like a chef perfecting a recipe. We’ll cook up the basics, take a taste, and then adjust the seasoning based on your feedback. We’re aiming for a final dish that’s not just edible but gourmet—no leftover screws or mystery ingredients!" },
        { headline3: "3. Weaving It", paragraph: "We’re on a mission to make sure your website is smoother than a jazz saxophonist’s solo. We’ll test it like a marathon runner, optimizing speed and usability. If your users aren’t dancing with delight, we’re not done yet. Our goal? A site that’s so fast and user-friendly, it makes everyone’s day a bit better." }
    ],

}

const pageNumber = theHOWData.pageNumber;
const headline2 = theHOWData.headline2;
const subtitle = theHOWData.subtitle;
const items = theHOWData.steps;

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

