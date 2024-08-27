import { useState, useEffect } from "react";

export function useScrambleText(text, intervalTime = 12000, scrambleSpeed = 70) {
    const [scrambledText, setScrambledText] = useState(text);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

    const scrambleText = (title) => {
        let iterations = 0;
        const interval = setInterval(() => {
            setScrambledText(
                title
                    .split("")
                    .map((char, index) => {
                        if (index < iterations) {
                            return title[index];
                        } else {
                            return letters[Math.floor(Math.random() * 36)];
                        }
                    })
                    .join("")
            );
            if (iterations >= title.length) clearInterval(interval);
            iterations += 1 / 3;
        }, scrambleSpeed);
    };

    useEffect(() => {
        scrambleText(text);

        const interval = setInterval(() => {
            scrambleText(text);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [text, intervalTime, scrambleSpeed]);

    return scrambledText;
}
