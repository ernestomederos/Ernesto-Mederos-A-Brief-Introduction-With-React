import React, { useState } from "react";
import CenteredSection from "../layouts/centeredSection";
import CenteredContainer from "../layouts/centeredContainer";
import VerticallyCenteredContainer from "../layouts/verticallyCenteredContainer";
import HorizontalScroll from "../layouts/horizontalScroll";
import DownArrow from "../elements/downArrow";
import P from "../elements/p";
import H2 from "../elements/h2";
import Card from "../elements/card";
import Data from "../elements/Data";


const pageNumber = Data.workflow.pageNumber;
const headline2 = Data.workflow.headline2;
const subtitle = Data.workflow.subtitle;
const items = Data.workflow.steps;
function Workflow() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <CenteredSection>
            <P text={pageNumber} />
            <CenteredContainer>
                <H2 text={headline2} />
                <P text={subtitle}></P>
            </CenteredContainer>
            <CenteredContainer>
                <HorizontalScroll>
                    {items.map((item, key) => (
                        <Card
                            key={item.id}
                            animationKey={key}
                            onMouseEnter={() => setHoveredCard(key)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {hoveredCard === key ? (<>
                                <DownArrow />

                                <P text={item.paragraph} />
                            </>
                            ) : (
                                <>
                                    <VerticallyCenteredContainer>
                                        <img src={item.image} data-aos="fade-in" alt={`Step ${item.id}`} height="250" />
                                        <P text={item.id + `. ` + item.headline3} />
                                    </VerticallyCenteredContainer>

                                </>
                            )}
                        </Card>
                    ))}
                </HorizontalScroll>
            </CenteredContainer>
        </CenteredSection>
    );
}

export default Workflow;
