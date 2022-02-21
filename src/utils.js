export const fetchTodos =  (setContxt,data=null) =>{
    const response =  data ?  data : localStorage.getItem('todos');
    const todos = JSON.parse(response);
    setContxt(todos ? todos.reverse() : null);
}



