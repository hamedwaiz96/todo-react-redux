import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {allTodos, stepsByTodoId} from './reducers/selectors.js';
import {fetchTodos} from './actions/todo_actions';

window.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore;
    window.store = store;
    window.allTodos = allTodos;
    window.stepsByTodoId = stepsByTodoId;
    window.fetchTodos = fetchTodos;
    ReactDOM.render(<Root store={store} />, root)
});