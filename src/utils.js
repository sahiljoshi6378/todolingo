const fetchTodos =  (setContxt,data=null) =>{
    const res = data ||  localStorage.getItem('todos');
    if(res){
        const todos = JSON.parse(res);
        setContxt(todos ? todos.reverse() : null);
    }
}


export default fetchTodos;
