import React, { useState } from "react";


import doneSvg from "../images/icon-check.svg";
import removeSvg from "../images/icon-cross.svg";


// TodoList containor component
const TodoListContainor = () =>{
    const [done,setDone] =  useState(false);
    return(
        <>  
        <div className="listcontainor__outer">
            <div className ="listcontainor__inner__todos">
                <div className="todo done">
                    <div className="status__outer"></div>
                    <p className="todo_text" >This is a new todo for test</p>
                    <img className="remove_icon" src={removeSvg} />
                </div>
                <div className="todo">
                    <div className="status__outer"></div>
                    <p className="todo_text" >This is a new todo for test</p>
                    <img className="remove_icon" src={removeSvg} />
                </div>
                <div className="todo done">
                    <div className="status__outer"></div>
                    <p className="todo_text" >This is a new todo for test</p>
                    <img className="remove_icon" src={removeSvg} />
                </div>
                <div className="todo">
                    <div className="status__outer"></div>
                    <p className="todo_text" >This is a new todo for test</p>
                    <img className="remove_icon" src={removeSvg} />
                </div>
                <div className="todo">
                    <div className="status__outer"></div>
                    <p className="todo_text" >This is a new todo for test</p>
                    <img className="remove_icon" src={removeSvg} />
                </div>
                <div className="todo">
                    <div className="status__outer"></div>
                    <p className="todo_text" >This is a new todo for test</p>
                    <img className="remove_icon" src={removeSvg} />
                </div>
                <div className="todo">
                    <div className="status__outer"></div>
                    <p className="todo_text" >This is a new todo for test</p>
                    <img className="remove_icon" src={removeSvg} />
                </div>
                <div className="todo">
                    <div className="status__outer"></div>
                    <p className="todo_text" >This is a new todo for test</p>
                    <img className="remove_icon" src={removeSvg} />
                </div>
                <div className="todo">
                    <div className="status__outer"></div>
                    <p className="todo_text" >This is a new todo for test</p>
                    <img className="remove_icon" src={removeSvg} />
                </div>
                <div className="todo">
                    <div className="status__outer"></div>
                    <p className="todo_text" >This is a new todo for test</p>
                    <img className="remove_icon" src={removeSvg} />
                </div>
            </div>
            <div className ="listcontainor__inner__stat">
                <p className="stat_txt active__items__left__txt">5 items</p>
                <div className="filter__actions" >
                    <p className="stat_txt action filter__action__all">All</p>
                    <p className="stat_txt action filter__action__active">Active</p>
                    <p className="stat_txt action filter__action__completed">Completed</p>
                </div>
                <p className="stat_txt action clear_all_action">Clear Completed</p>
            </div>
        </div>
        </>
    )
}




// exporting default TodoListContainor
export default TodoListContainor



// <div className="listcontainor__inner__stat__display">
// <p className="stat_txt active__items__left__txt">5 items</p>
// {/* <div className="filter__actions" >
//     <p className="stat_txt action filter__action__all">All</p>
//     <p className="stat_txt action filter__action__active">Active</p>
//     <p className="stat_txt action filter__action__completed">Completed</p>
// </div> */}
// <p className="stat_txt action clear_all_action">Clear Completed</p>
// <p className="stat_txt action clear_all_action">Clear Completed</p>
// </div>