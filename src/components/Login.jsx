import { TodoContext } from "../context";

import googlePng from  "../images/google.png";
import githubPng from "../images/github.png";
import darkDesktopPng from "../images/dark-login-desktop.svg";
import lightDesktopPng from "../images/light-login-desktop.svg";
import { useContext } from "react";

const Login = () =>{
    const [[todosList,setTodosList],[theme,setTheme]] = useContext(TodoContext);
    return(
        <>
        <div className="login__outer">
                <img id="login_bg" className="login__bg" src={theme === "dark" ? darkDesktopPng : lightDesktopPng} data-theme={`${theme === "dark" ? "dark" : "light" }`} />
                <div className="login__txt__stack">
                    <p className="login_txt"><span>Let's</span><span> Sign you in.</span></p>
                    <p className="login_sub_txt">login to get access with any of the<br/>below options.</p>
                </div>
                <div className="login__btn__stack" >
                    <button id="login_with_google" className="auth__btb"><img data-theme={`${theme === "dark" ? "dark" : "light" }`} id="login_with_google_img" className="login-png" src={googlePng} /> Login With Google</button>
                    <button id="login_with_github" className="auth__btb"><img data-theme={`${theme === "dark" ? "dark" : "light" }`} id="login_with_github_img" className="login-png" src={githubPng} /> Login With Github</button>
                </div>
         
        </div>
        </>
    )
}


// exporting default
export default Login;