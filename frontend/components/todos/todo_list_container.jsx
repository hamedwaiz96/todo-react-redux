import {allTodos} from "../../reducers/selectors";
import TodoList from './todo_list';
import { connect } from "react-redux";
import {updateTodo, deleteTodo, fetchTodos, createTodo} from '../../actions/todo_actions';

const mapStateToProps = state => ({
    todos: allTodos(state),
    errors: state.errors
});

const mapDispatchToProps = dispatch => ({
    deleteTodo: (todo) => dispatch(deleteTodo(todo)),
    fetchTodos: (todos) => dispatch(fetchTodos(todos)),
    createTodo: (todo) => dispatch(createTodo(todo)),
    updateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);