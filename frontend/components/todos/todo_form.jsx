import React from 'react';
import uniqueId from '../../util/id';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.receiveTodo = this.props.receiveTodo;
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(e){
        e.preventDefault();
        const title = document.querySelector("input[name='title']");
        const body = document.querySelector("input[name='body']");
        this.receiveTodo({
            id: uniqueId(),
            title: title.value,
            body: body.value
        });
        title.value = "";
        body.value = "";
        this.setState();
    }

    render(){
        const self = this;
        return(
            <form action="">
                <input type="text" name="title" />
                <input type="text" name="body" />
                <input onClick={self.addTodo} type="submit"/>
            </form>
        )
    }
}

export default TodoForm;