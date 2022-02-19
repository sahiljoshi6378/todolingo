import React, { useState } from "react";
import '../styles/Home.css';
import bgImgDark from   "../images/bg-desktop-light.jpg";
import bgImgLight from   "../images/bg-desktop-dark.jpg";


// importing components
import Navbar from "../components/navbar/Navbar";
import InputBar from "../components/add-input/InputBar";
import TodoListContainor from "../components/TodoListContainor/TodoListContainor";

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
                <p className="home__sub_info">Drag and drop to reorder list.</p>
            </div>
        </>
    )
}



// exporting default
export default Home;