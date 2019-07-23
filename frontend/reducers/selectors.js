export const allTodos = (state) => {
    let new_arr = [];
    for(let i = 0; i < Object.keys(state.todos).length; i++){
        const new_key = Object.keys(state.todos)[i];
        new_arr.push(state.todos[new_key]);
    }
    return new_arr;
} 

export const stepsByTodoId = (state, todoId) => {
    let new_ar = [];
    for(let i = 0; i < Object.keys(state.steps).length; i++){
        const new_key1 = Object.keys(state.steps)[i];
        if(state.steps[new_key1].todo_id === todoId){
            new_ar.push(state.steps[new_key1])
        }
    }
    return new_ar;
}