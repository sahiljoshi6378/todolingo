import React from "react";
import "./TodoListContainor.css"


// TodoList containor component
const TodoListContainor = () =>{
    return(
        <>  
        <div className="listcontainor__outer">
            <div className ="listcontainor__inner__display">

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