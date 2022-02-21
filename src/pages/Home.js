import React, { useContext, useState } from "react";



import bgImgLight from   "../images/bg-desktop-light.jpg";
import bgImgDark  from   "../images/bg-desktop-dark.jpg";


// importing components
import Navbar from "../components/Navbar";
import InputBar from "../components/InputBar";
import TodoListContainor from "../components/TodoListContainor";

import {TodoContext}  from "../context";
import { fetchTodos } from "../utils";

// Home component
const Home = () =>{
    const [[todosList,setTodosList],[theme,setTheme]] = useContext(TodoContext)
        // setActive
        const setActive = (e) =>{
            const nodes = Array.from(e.target.offsetParent.children[1].children);
            nodes.forEach(node =>{
                node.classList.contains('active') && node.classList.remove('active');   
            })
    
            e.target.classList.add('active');
            if(e.target.dataset.filterType === "active"){
                const todos = JSON.parse(localStorage.getItem('todos'));
                const filtred_todos = todos.filter(todo =>{
                    return todo.todo_status === false
                })
    
                fetchTodos(setTodosList,JSON.stringify(filtred_todos));
            
            }
    
            else if(e.target.dataset.filterType === "conpleted"){
                const todos = JSON.parse(localStorage.getItem('todos'));
                const filtred_todos = todos.filter(todo =>{
                    return todo.todo_status === true
                })
    
              
                fetchTodos(setTodosList,JSON.stringify(filtred_todos));
            }else{
                const todos = JSON.parse(localStorage.getItem('todos'));
                console.log(todos);
                fetchTodos(setTodosList);
            }
    
        }
    return (
        <>
            <div style={{  
                        backgroundImage: "url(" + `${ theme === "dark" ? bgImgDark : bgImgLight}` + ")",
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
                <button onClick={setActive} data-filter-type="all" className="stat_txt cabtn action filter__action all active">All</button>
                <button onClick={setActive} data-filter-type="active" className="stat_txt cabtn action filter__action Active">Active</button>
                <button onClick={setActive}  data-filter-type="conpleted" className="stat_txt cabtn action filter__action completed">Completed</button>
                </div>
                <p className="home__sub_info">Drag and drop to reorder list.</p>
            </div>
        </>
    )
}



// exporting default
export default Home;
