import React from "react";
import "./WhatWeDo.css";
import CenteredSection from "../layouts/centeredSection";
import P from "../elements/p";
import TopVignette from "../elements/topVignette";
import CenteredContainer from "../layouts/centeredContainer";
import VerticallyCenteredContainer from "../layouts/verticallyCenteredContainer";
import H2 from "../elements/h2";
import H4 from "../elements/h4";
import DownArrow from "../elements/downArrow";
import H3 from "../elements/h3";
import BottomVignette from "../elements/bottomVignette";

const databaseData = {
    pageNumber: "II",
    headline2: "Databases",
    subtitle: "STRUCTURED DATA, POWERFUL INSIGHTS",
    paragraph1: "Your data is the backbone of your application, and I’m here to make sure it’s organized, secure, and accessible. With expertise in PgAdmin4 and MySQL, I design and manage databases that are optimized for performance and scalability.",
    headline3: "What We Offer:",
    steps: [
        { headline4: "Database Creation and Design", paragraph2: "Structuring databases that meet the unique needs of your application, ensuring data integrity and efficiency." },
        { headline4: "Database Optimization", paragraph2: "Fine-tuning your database for faster query processing and reduced load times." },
        { headline4: "Data Migration and Backup", paragraph2: "Safely migrating and backing up your data to prevent loss and ensure continuity." }
    ],

}

const pageNumber = databaseData.pageNumber;
const headline2 = databaseData.headline2;
const subtitle = databaseData.subtitle;
const items = databaseData.steps;
const paragraph1 = databaseData.paragraph1;
const headline3 = databaseData.headline3;

function Database() {
    return (
        <CenteredSection>
            <P text={pageNumber} />
            <TopVignette />
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
            <BottomVignette />
            <DownArrow />
        </CenteredSection>

    )
}

export default Database;