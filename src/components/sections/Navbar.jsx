import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import Logo from "../../assets/logos/logo-ernesto.png";
import showSidebar from "../hooks/showSidebar";
import hideSidebar from "../hooks/hideSidebar";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img data-aos="flip-up" src={Logo} alt="Logo" height="50px" />
                </Link>
            </div>
            <ul className="navbar-nav hiddenOnMobile">
                <li data-aos="flip-up">
                    <Link className="menu-links hiddenOnMobile" to="/">HOME</Link>
                </li>
                <li data-aos="flip-up">
                    <Link className="menu-links hiddenOnMobile" to="/about-us">ABOUT US</Link></li>
                <li data-aos="flip-up">
                    <Link className="menu-links hiddenOnMobile" to="/services">SERVICES</Link>
                </li>
                <li data-aos="flip-up">
                    <Link className="menu-links hiddenOnMobile" to="/contact">CONTACT</Link>
                </li>
            </ul>
            <ul data-aos="flip-up" className="side-bar">
                <li data-aos="flip-up">
                    <div onClick={hideSidebar}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                        </svg>
                    </div>
                </li>
                <li data-aos="flip-up">
                    <Link className="menu-links" to="/">HOME</Link>
                </li>
                <li data-aos="flip-up">
                    <Link className="menu-links" to="/about-us">ABOUT US</Link></li>
                <li data-aos="flip-up">
                    <Link className="menu-links" to="/services">SERVICES</Link>
                </li>
                <li data-aos="flip-up">
                    <Link className="menu-links" to="/contact">CONTACT</Link>
                </li>
            </ul>
            <div className="burger-menu showedOnMobile"
                onClick={showSidebar}
                data-aos="flip-up">
                <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></p>
            </div>
        </nav>
    )
}

export default Navbar;