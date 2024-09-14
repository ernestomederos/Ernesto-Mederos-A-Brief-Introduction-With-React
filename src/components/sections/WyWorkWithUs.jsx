import React from "react";
import "./WhyItMatters.css";
import CenteredSection from "../layouts/centeredSection";
import P from "../elements/p";
import CenteredContainer from "../layouts/centeredContainer";
import H2 from "../elements/h2";
import DownArrow from "../elements/downArrow";
import H4 from "../elements/h3";
import RandomImageSeparator from "../randomImage";

const whyWorkWithUsData = {
    pageNumber: "III",
    headline2: "WhyUs",
    subtitle: "THE 20% THAT DRIVES 80% OF YOUR PROJECT's SUCCESS",
    steps: [
        { headline4: "1. Communication", paragraph1: "THE 20% THAT DELIVERS 80% OF THE RESULTS", paragraph2: "We believe that effective communication is the cornerstone of any successful project. Clear, consistent, and proactive communication ensures that your vision is understood and executed flawlessly. By focusing on this 20%, we maximize the efficiency and quality of our work, leading to outcomes that exceed expectations." },
        { headline4: "2. Agility", paragraph1: "SMALL ADJUSTMENTS, BIG IMPACTS", paragraph2: "Just like a well-timed pivot can change the course of a game, our agile approach allows us to adapt quickly and efficiently. We embrace feedback and iterate rapidly, ensuring that even minor adjustments have a significant positive impact on the final product. This flexibility is key to navigating the complexities of development." },
        { headline4: "3. Collaboration", paragraph1: "THE SYNERGY THAT MULTIPLIES RESULTS", paragraph2: "We see collaboration not as a simple partnership but as a synergy where our combined efforts multiply the potential for success. By actively involving you in the development process, we harness collective insights and creativity, leading to a product that’s more than the sum of its parts." }

    ],

}

const pageNumber = whyWorkWithUsData.pageNumber;
const headline2 = whyWorkWithUsData.headline2;
const subtitle = whyWorkWithUsData.subtitle;
const items = whyWorkWithUsData.steps;

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
