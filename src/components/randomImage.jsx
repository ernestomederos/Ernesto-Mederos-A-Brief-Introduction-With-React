import React, { useState, useEffect, useRef } from "react";
import "./randomImage.css";
import Image from "./elements/img";
import uno from "../assets/images/12STEPS/1.png";
import dos from "../assets/images/12STEPS/2.png";
import tres from "../assets/images/12STEPS/3.png";
import cuatro from "../assets/images/12STEPS/4.png";
import cinco from "../assets/images/12STEPS/5.png";
import seis from "../assets/images/12STEPS/6.png";
import siete from "../assets/images/12STEPS/7.png";
import ocho from "../assets/images/12STEPS/8.png";
import nueve from "../assets/images/12STEPS/9.png";
import diez from "../assets/images/12STEPS/10.png";
import once from "../assets/images/12STEPS/11.png";
import doce from "../assets/images/12STEPS/12.png";
import CenteredContainer from "./layouts/centeredContainer";

let imagesArray = [uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce];

function randomIndex(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function RandomImageSeparator() {
    const [randomImage, setRandomImage] = useState(randomIndex(imagesArray));
    const timeoutRef = useRef(null); // Reference to the current timeout

    // Define the updateImage function so it can be used both in useEffect and event handlers
    const updateImage = () => {
        setRandomImage(randomIndex(imagesArray));
        const randomDelay = Math.floor(Math.random() * 3) + 1; // Random delay between 1 and 30 deciseconds
        timeoutRef.current = setTimeout(updateImage, randomDelay * 100); // Convert deciseconds to milliseconds
    };

    useEffect(() => {
        updateImage(); // Start the cycle

        // Cleanup function to clear timeout if component unmounts
        return () => clearTimeout(timeoutRef.current);
    }, []);

    const handleMouseOver = () => {
        clearTimeout(timeoutRef.current); // Stop the image change on mouseover
    };

    const handleMouseOut = () => {
        updateImage(); // Resume the image change on mouseout
    };

    return (
        <CenteredContainer>
            <div className="separator" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <Image itemUrl={randomImage} alternativeText="image-item" height="70" />
            </div>
        </CenteredContainer>
    );
}

export default RandomImageSeparator;
