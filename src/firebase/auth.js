import {AUTH,GOOGLE_AUTH_PROVIDER} from "../firebase/firebase-config.js";
import { signInWithPopup } from "firebase/auth";


class AuthProvider{
    static LOGIN_WITH_GOOGLE = async () =>{
        const AUTH_RES = await signInWithPopup(AUTH,GOOGLE_AUTH_PROVIDER);
        
        // creating user object instance
        const USER_OBJ = {
            name : AUTH_RES.user.displayName,
            email : AUTH_RES.user.email,
            photoURL : AUTH_RES.user.photoURL,
            uid :AUTH_RES.user.uid,
        }


        // setting up into the localstorage;
        localStorage.setItem('auth-user',JSON.stringify(USER_OBJ));
        localStorage.setItem('isAuthencatedUser',"true");


        // setting up cookies
        document.cookie=`accesstoken=${AUTH_RES.user.accessToken}`;
        document.cookie=`uid=${AUTH_RES.user.uid}`;


        // despatching response
        return 'OK'
    }
}



// exporting default 
export default AuthProvider;