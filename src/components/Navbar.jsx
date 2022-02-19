import React from "react";

import svgSun from "../images/icon-sun.svg";
import svgMoon from "../images/icon-moon.svg";



// Navbar component
const Navbar = () =>{
    // theme switcher
    const switchTheme = (e) =>{
        
    }
    return(
        <>
        <header className="navbar__header__outer">
            <h1 id="logo">TODO</h1>
            <img className="navbar__svg" onClick={switchTheme} src={svgMoon} />
        </header>
        </>
    )
}

// exporting default Navbar
export default Navbar