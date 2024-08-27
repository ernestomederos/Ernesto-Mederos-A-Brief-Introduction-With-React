import React from "react";
import {Link } from 'react-router-dom';
import "./Navbar.css";
import Logo from "../../assets/logos/logo-ernesto.png";

function Navbar() {
    // AOS.init({
    //     duration: 400,
    //     easing: "ease-in-out",
    //     once: true,  
    // });
    return (
        <nav className="navbar">
            {/* <div className="navbar-brand">
                <Link to="/">
                    <img data-aos="flip-up" src={Logo} alt="Logo" height="50px" />
                </Link>
            </div> */}

            <ul className="navbar-nav">
                <li data-aos="flip-up"><Link to="/">HOME</Link></li>
                <li data-aos="flip-up"><Link to="/about-us">ABOUT US</Link></li>
                {/* <li data-aos="flip-up" className="dropdown">
                    <Link to="/portfolio">PORTFOLIO</Link>
                    <div className="dropdown-content">
                        <Link className="dropdown-items" to="/portfolio/cinemascope">CSCOPE</Link>
                        <Link className="dropdown-items" to="/portfolio/hermes">HERMES</Link>
                        <Link className="dropdown-items" to="/portfolio/cubafy">CUBAFY</Link>
                    </div>
                </li> */}
                {/* <li data-aos="flip-up"><Link to="/companies">CV</Link></li> */}
                <li data-aos="flip-up" className="dropdown">
                    <Link to="/services">SERVICES</Link>
                    <div className="dropdown-content">
                        <Link className="dropdown-items" to="/services/webdev">WEB</Link>
                        <Link className="dropdown-items" to="/services/api-integration">API</Link>
                        <Link className="dropdown-items" to="/services/support">SUPPORT</Link>
                    </div>
                </li>
                {/* <li data-aos="flip-up" className="dropdown">
                    <Link to="/social-media">SOCIAL MEDIA</Link>
                    <div className="dropdown-content">
                        <Link className="dropdown-items" to="/social-media/instagram">INSTAGRAM</Link>
                        <Link className="dropdown-items" to="social-media/youtube">YOUTUBE</Link>
                        <Link className="dropdown-items" to="/social-media/linkedin">LINKED IN</Link>
                    </div>
                </li> */}
            </ul>

            <div data-aos="flip-up">
                <Link to="/contact">CONTACT</Link>
            </div>




        </nav>

    )
}

export default Navbar;