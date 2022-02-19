import React, { useState } from "react";

import bgImgDark from   "../images/bg-desktop-light.jpg";
import bgImgLight from   "../images/bg-desktop-dark.jpg";


// importing components
import Navbar from "../components/Navbar";
import InputBar from "../components/InputBar";
import TodoListContainor from "../components/TodoListContainor";

// Home component
const Home = () =>{
    const [darkMode,setDarkMode] = useState(true);
    return (
        <>
            <div style={{  
                        backgroundImage: "url(" + `${ darkMode ? bgImgDark : bgImgLight}` + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }} 
                    className="home__top__area"
                    >
                        <Navbar/>
                        <InputBar/>
            </div>
            <div className="home__bottom__area">
                <TodoListContainor/>
                <div className="mobile__filter__actions__outer">
                    <p className="stat_txt action filter__action__all">All</p>
                    <p className="stat_txt action filter__action__active">Active</p>
                    <p className="stat_txt action filter__action__completed">Completed</p>
                </div>
                <p className="home__sub_info">Drag and drop to reorder list.</p>
            </div>
        </>
    )
}



// exporting default
export default Home;
