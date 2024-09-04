import React from "react";
import CenteredSection from "../layouts/centeredSection";
import "./Meg4dev.css";
import TopKey from "../elements/topKey";
import BottomKey from "../elements/bottomKey";
import H1 from "../elements/h1";
import P from "../elements/p";
import DownArrow from "../elements/downArrow";
import CenteredContainer from "../layouts/centeredContainer";


function Meg4dev() {

    return (
        <CenteredSection><TopKey />
            <CenteredContainer>
                <H1 text="MEG4DEV" />
            </CenteredContainer>
            <P className="" text="Welcome to MEG4DEV—where code is a golden key. I'm Ernesto Mederos Garcia, the guy who thought, 'Why not turn my name into a brand?'Curious? Come on in, and let’s see how we can make your next big idea happen—no boring tech talk, I promise!" />
            <BottomKey />
            <DownArrow />
        </CenteredSection>
    )
}

export default Meg4dev;