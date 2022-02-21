import React, { useContext } from "react";
import Home from "./pages/Home";
import { TodoProvider } from "./context";

// App component
const App = () =>{
    
    return (
        <TodoProvider>
            <Home/>
        </TodoProvider>  
    )
}



// exporting default
export default App;