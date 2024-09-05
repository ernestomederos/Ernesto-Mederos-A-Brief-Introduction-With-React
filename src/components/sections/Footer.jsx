import React from "react";
import CenteredSection from "../layouts/centeredSection";
import VerticallyCenteredContainer from "../layouts/verticallyCenteredContainer";
import CenteredContainer from "../layouts/centeredContainer";
import "./Footer.css";
function Footer() {
    const currentDate = new Date().getFullYear();
    return (

        <footer className="app-footer">
            <CenteredSection>
                <div className="section-container">
                    <CenteredContainer>
                        <div className="footer-section">
                            <VerticallyCenteredContainer>
                                <a href="/contact">CONTACT</a>
                                <a href="https://facebook.com/meg4dev" rel="noreferrer" target="_blank">GITHUB</a>
                                <a href="https://twitter.com/meg4dev" rel="noreferrer" target="_blank">LINKED-IN</a>

                            </VerticallyCenteredContainer>
                        </div>

                    </CenteredContainer>
                    <CenteredContainer>
                        <div className="footer-section">
                            <VerticallyCenteredContainer>
                                <a href="/about-us">ABOUT US</a>
                                <a href="/terms">TERMS OF SERVICE</a>
                                <a href="/privacy">PRIVACY POLICY</a>
                            </VerticallyCenteredContainer>

                        </div>
                    </CenteredContainer>
                    <CenteredContainer>
                        <div className="footer-section">
                            <VerticallyCenteredContainer>
                                <a href="/">HOME</a>
                                <a href="/services">SERVICES</a>
                                <a href="/portfolio">PORTFOLIO</a>
                            </VerticallyCenteredContainer>
                        </div>
                    </CenteredContainer>

                </div>
                <p> &copy; {currentDate} MEG4DEV</p>

            </CenteredSection>
        </footer>
    )
}

export default Footer;
