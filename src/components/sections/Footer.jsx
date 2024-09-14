import React from "react";
import CenteredSection from "../layouts/centeredSection";
import VerticallyCenteredContainer from "../layouts/verticallyCenteredContainer";
import CenteredContainer from "../layouts/centeredContainer";
import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
    const currentDate = new Date().getFullYear();
    return (

        <footer className="app-footer">
            <CenteredSection>
                <div className="section-container">
                    <CenteredContainer>
                        <div className="footer-section">
                            <VerticallyCenteredContainer>
                                <Link to="/contact">CONTACT</Link>
                                <Link to="https://github.com/ernestomederos" rel="noreferrer" target="_blank">GITHUB</Link>
                                <Link to="https://www.linkedin.com/in/ernestomederosdev/" rel="noreferrer" target="_blank">LINKED-IN</Link>

                            </VerticallyCenteredContainer>
                        </div>

                    </CenteredContainer>
                    <CenteredContainer>
                        <div className="footer-section">
                            <VerticallyCenteredContainer>
                                <Link to="/about-us">ABOUT US</Link>
                                <Link to="/terms">TERMS OF SERVICE</Link>
                                <Link to="/privacy">PRIVACY POLICY</Link>
                            </VerticallyCenteredContainer>

                        </div>
                    </CenteredContainer>
                    <CenteredContainer>
                        <div className="footer-section">
                            <VerticallyCenteredContainer>
                                <Link to="/">HOME</Link>
                                <Link to="/services">SERVICES</Link>
                                <Link to="/portfolio">PORTFOLIO</Link>
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
