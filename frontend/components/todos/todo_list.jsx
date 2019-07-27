import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchTodos();
    }

    render(){
        const self = this;
        return (
            <div>
                <ul>
                    {self.props.todos.map((todo) => {
                        return (
                            <TodoListItem todo={todo} deleteTodo={self.props.deleteTodo} updateTodo={self.props.updateTodo} />
                        )
                    })
                    }
                </ul>
                <TodoForm errors={self.props.errors} receiveTodo={self.props.receiveTodo} createTodo={self.props.createTodo} />
            </div>
            
        )
    }
}

export default TodoList;