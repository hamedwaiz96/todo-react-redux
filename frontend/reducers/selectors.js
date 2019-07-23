const allTodos = (state) => {
    let new_arr = [];
    for(let i = 0; i < Object.keys(state.todos).length; i++){
        const new_key = Object.keys(state.todos)[i];
        new_arr.push(state.todos[new_key]);
    }
    return new_arr;
} 

export default allTodos;