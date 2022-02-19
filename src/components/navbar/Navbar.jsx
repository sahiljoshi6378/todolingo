import React from "react";
import "./Navbar.css"
import svgSun from "../../images/icon-sun.svg";
import svgMoon from "../../images/icon-moon.svg";



// Navbar component
const Navbar = () =>{
    return(
        <>
        <header className="navbar__header__outer">
            <h1 id="logo">TODO</h1>
            <img className="navbar__svg" src={svgMoon} />
        </header>
        </>
    )
}

// exporting default Navbar
export default Navbar