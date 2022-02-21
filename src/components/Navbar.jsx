import React, { useContext, useEffect, useState } from "react";

import svgSun from "../images/icon-sun.svg";
import svgMoon from "../images/icon-moon.svg";



import {TodoContext} from "../context";


// Navbar component
const Navbar = () =>{
   
    const [[todosList,setTodosList],[theme,setTheme]] = useContext(TodoContext)
 
    // theme switcher
    const switchTheme = () =>{
        if(!localStorage.getItem('theme')){
            localStorage.setItem('theme','dark');
            themeSwticher();
        }
        else if(localStorage.getItem('theme') === 'light'){
            localStorage.setItem('theme','dark');
            themeSwticher();
        }else if(localStorage.getItem('theme') === 'dark'){
            localStorage.setItem('theme','light');
            themeSwticher();
        }
    }
  
    const themeSwticher = () =>{
        if(localStorage.getItem('theme') === 'light'){
            document.body.className = 'theme-light';
            setTheme('light');
        }
        else if(localStorage.getItem('theme') === 'dark'){
            document.body.className = 'theme-dark'
            setTheme('dark');
        }
    }

    useEffect(() =>{
        themeSwticher();
    },[]);
  
    return(
        <>
        <header className="navbar__header__outer">
            <h1 id="logo">TODO</h1>
            <img className="navbar__svg" onClick={switchTheme} src={theme ===  'dark' ? svgMoon : svgSun } />
        </header>
        </>
    )
}

// exporting default Navbar
export default Navbar