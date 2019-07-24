import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO} from '../actions/todo_actions';
import {merge} from 'lodash';

const initialState = {
        1: {
            id: 1,
            title: 'wash car',
            body: 'with soap',
            done: false
        },
        2: {
            id: 2,
            title: 'wash dog',
            body: 'with shampoo',
            done: true
        }
    
};

const todosReducer = (state=initialState, action) => {
    switch(action.type){
        case(RECEIVE_TODOS):
            const new_obj = {};
            action.todos.map((todo) => {
                new_obj[todo.id] = todo;
            });
            return new_obj;
        case(RECEIVE_TODO):
            const new_obj1 = {};
            new_obj1[action.todo.id] = action.todo;
            const initial_todos = Object.assign({}, state);
            const new_obj2 = merge(initial_todos, new_obj1);
            return new_obj2;
        case (REMOVE_TODO):
            const id = action.todo.id;
            delete state[id];
            const new_state = Object.assign({}, state);
            return new_state;
        default: 
            return state;
    }
}

export default todosReducer;