import React, { useState } from "react";


export const TodoContext = React.createContext();




export const TodoProvider = props =>{
    const [todosList,setTodosList] = useState();
    const [theme,setTheme] =  useState();
    return(
        <TodoContext.Provider value={[[todosList,setTodosList],[theme,setTheme]]}>
            {props.children}
        </TodoContext.Provider>
    ) 
}










