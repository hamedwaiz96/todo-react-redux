import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const self = this;
        return (
            <div>
                <ul>
                    {self.props.todos.map((todo) => {
                        return (
                            <TodoListItem todo={todo} removeTodo={self.props.removeTodo} receiveTodo={self.props.receiveTodo} />
                        )
                    })
                    }
                </ul>
                <TodoForm receiveTodo={self.props.receiveTodo} />
            </div>
            
        )
    }
}

export default TodoList;