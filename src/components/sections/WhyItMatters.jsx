import React from "react";
import "./WhyItMatters.css";
import CenteredSection from "../layouts/centeredSection";
import P from "../elements/p";
import CenteredContainer from "../layouts/centeredContainer";
import H2 from "../elements/h2";
import DownArrow from "../elements/downArrow";
import H3 from "../elements/h3";

const whyItMattersData = {
    pageNumber: "II",
    headline2: "WhyMatters",
    subtitle: "DRIVING RESULTS THROUGH STRATEGIC DEVELOPMENT",
    steps: [
        { headline3: "1", paragraph: "In today’s digital world, your web application is more than just a tool—it’s a first impression, a brand ambassador, and often the primary way your audience interacts with you. A sluggish, buggy app can cost you users, leads, and ultimately, revenue. That’s where we come in." },
        { headline3: "2", paragraph: "Our work is meant to drive engagement, retention, and conversions. We don’t just build apps; we create solutions that align with your business goals and propel your success. Whether it’s streamlining operations, boosting customer satisfaction, or increasing sales, our focus is on delivering measurable results." },
        { headline3: "3", paragraph: "For example, we’ve been working on a cutting-edge website for a recruitment agency based in Ireland, designed to transform their digital presence and streamline their candidate placement process. We’ll be sharing how it’s going shortly, so stay tuned for an inside look at the impact we’re making." }

    ],

}

const pageNumber = whyItMattersData.pageNumber;
const headline2 = whyItMattersData.headline2;
const subtitle = whyItMattersData.subtitle;
const items = whyItMattersData.steps;

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

