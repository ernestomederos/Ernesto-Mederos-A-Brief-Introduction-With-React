import React from "react";
import { useScrambleText } from "../hooks/useScrambleText";

function H1({ text }) {
    const scrambledText = useScrambleText(text);

    return (
        <h1 data-aos="fade-zoom-in" data-value={text}>
            {scrambledText}
        </h1>
    );
}

export default H1;


