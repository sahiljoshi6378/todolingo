import React, { useContext, useState } from "react";
import {TodoContext} from "../context";
import fetchTodos from "../utils";

// input-bar component
const InputBar = () =>{
    const [todoTxt,setTodoTxt] = useState();
    const [[todosList,setTodosList]] = useContext(TodoContext);



    
    // capture new todo and adding it to list
    const captureTodo = (e) =>{
       if((e.target.value).trim() !== ""){
        if (e.keyCode === 13) {
            const current_todos = JSON.parse(localStorage.getItem('todos'));
            if(current_todos !== null){
                current_todos.push({
                    TID : current_todos.length + 1,
                    todo_txt : e.target.value.slice(0,30) + "...",
                    todo_status :false
                })
                setTodoTxt("");
                localStorage.setItem('todos',JSON.stringify(current_todos));
                
 
            }
 
            else if(current_todos === null){
                localStorage.setItem('todos',JSON.stringify([
                     {
                         TID : 1,
                         todo_txt : e.target.value,
                         todo_status:false
                     }
                ]))
            }
         }
 
         fetchTodos(setTodosList);
       }
    }



    return(
        <>
            <div className="inptbar__srch__outer">
                <input id="inpt_bx" autoComplete="off" onKeyUp={captureTodo}  onChange={(e) =>  setTodoTxt(e.target.value)} value={todoTxt || ""} placeholder="Create a new todo" />
            </div>
        </>
    )
}



// exporting default InputBar
export default InputBar