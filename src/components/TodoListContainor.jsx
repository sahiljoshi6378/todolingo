import React, {  useContext, useEffect} from "react";

import { TodoContext } from "../context";
import {fetchTodos} from "../utils";



import nothingHere from "../images/nothing-here.svg";
import removeSvg from "../images/icon-cross.svg";

// TodoList containor component
const TodoListContainor = () =>{
    const [[todosList,setTodosList]] = useContext(TodoContext);


    // clearAllTodo
    const clearAllTodos = () =>{
        localStorage.removeItem('todos')
        fetchTodos(setTodosList);
    }


    // clearSingelTodo
    const clearSingelTodo = (e) =>{
        const todoKey = e.target.offsetParent.attributes[0].textContent || e.target.offsetParent.attributes[0].value;
        const todos =  JSON.parse(localStorage.getItem('todos')).filter(todo =>{
            if(todo.TID !== parseInt(todoKey)){
                return todo;
            }
        });

        localStorage.setItem('todos',JSON.stringify(todos));
        fetchTodos(setTodosList);
        
        
    }
   

  


    // changeStatus
    const changeStatus = (e) =>{
        const todoKey = e.target.offsetParent.attributes[0].textContent || e.target.offsetParent.attributes[0].value;
        const todos = JSON.parse(localStorage.getItem('todos')).map(todo =>{
            if(todo.TID === parseInt(todoKey)){
                todo.todo_status = todo.todo_status ? false :true;
                return todo
            }
            return todo;
        })


        localStorage.setItem('todos',JSON.stringify(todos));
        fetchTodos(setTodosList);
    
    }


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

    
    
    useEffect(() =>{
        fetchTodos(setTodosList);
    },[])

    
    

    

  
   
    return(
        <>  
            <div className="listcontainor__outer">
                <div className ="listcontainor__inner__todos">
                    {todosList && todosList.length > 0 ? (
                        todosList.map(todo => (
                                <div key={todo.TID} pid={todo.TID} className={`todo ${todo.todo_status ? "done" : ""}`}>
                                    <div onClick={changeStatus} className="status__outer"></div>
                                    <p className="todo_text" >{todo.todo_txt}</p>
                                    <img onClick={clearSingelTodo} className="remove_icon" src={removeSvg} />
                                </div>
                            ))
                    ):(<img className="no-todo" src={nothingHere} />)}
                </div>
                <div className ="listcontainor__inner__stat">
                    <p className="stat_txt active__items__left__txt">{todosList && todosList.length > 0 ? todosList.length : 0 } items</p>
                    <div className="filter__actions" >
                        <button onClick={setActive} data-filter-type="all" className="stat_txt cabtn action filter__action all active">All</button>
                        <button onClick={setActive} data-filter-type="active" className="stat_txt cabtn action filter__action Active">Active</button>
                        <button onClick={setActive}  data-filter-type="conpleted" className="stat_txt cabtn action filter__action completed">Completed</button>
                    </div>
                    <button onClick={clearAllTodos} className="stat_txt cabtn action clear_all_action">Clear All</button>
                </div>
            </div>
        </>
    )
}




// exporting default TodoListContainor
export default TodoListContainor



