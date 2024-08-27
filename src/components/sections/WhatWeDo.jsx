import React from "react";
import "./WhatWeDo.css";
import CenteredSection from "../layouts/centeredSection";
import P from "../elements/p";
import TopVignette from "../elements/topVignette";
import CenteredContainer from "../layouts/centeredContainer";
import Image from "../elements/img";
import H2 from "../elements/h2";
import DownArrow from "../elements/downArrow";
import H3 from "../elements/h3";
import BottomVignette from "../elements/bottomVignette";
import Pic1 from "../../assets/images/WhatWeDo/WhatWeDO/1.png";
import Pic2 from "../../assets/images/WhatWeDo/WhatWeDO/2.png";
import Pic3 from "../../assets/images/WhatWeDo/WhatWeDO/3.png";

const whatIDoData = {
    pageNumber: "I",
    headline2: "What We Do",
    subtitle: "UNLEASHING NEXT-LEVEL REACT SOLUTIONS",
    steps: [
        { headline3: "React Development", pic: Pic1, paragraph: "Building responsive, high-performance web applications that look stunning and work flawlessly across all devices." },
        { headline3: "API Integration", pic: Pic2, paragraph: "Seamlessly connecting your front-end to any backend, making sure data flows like a well-oiled machine." },
        { headline3: "Performance Optimization", pic: Pic3, paragraph: "Shaving off those critical milliseconds to ensure your app not only works but flies." }
    ],

}

const pageNumber = whatIDoData.pageNumber;
const headline2 = whatIDoData.headline2;
const subtitle = whatIDoData.subtitle;
const items = whatIDoData.steps;

function WhatIDo() {

    return (
        <CenteredSection>
            <P text={pageNumber} />
            <TopVignette />
            <CenteredContainer>
                <H2 text={headline2} />
                <strong><P text={subtitle} /></strong>
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
            <BottomVignette />
            <DownArrow />
        </CenteredSection>

    )
}

export default WhatIDo;

