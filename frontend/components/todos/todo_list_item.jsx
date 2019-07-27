import React from 'react';
import uniqueId from '../../util/id';
import TodoDetailViewContainer from './todo_detail_view_container';

class TodoListItem extends React.Component {
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
        this.done = this.done.bind(this);
        this.id = uniqueId().toString();
        this.state = {detail: false};
        this.switch = this.switch.bind(this);
        const self = this;
        this.state = {done: self.props.todo.done.toString()}
    }

    done(e){
        e.preventDefault();
        const self = this;
        const done = e.target;
        let toggleDone = !self.props.todo.done;
        let todo1 = {
            id: self.props.todo.id,
            title: self.props.todo.title,
            body: self.props.todo.body,
            done: toggleDone
        }
        self.props.updateTodo(todo1);
        if(done.className === "true"){
            done.className = "false";
        } else {
            done.className = "true";
        }
        this.setState({done: toggleDone.toString()});
    }

    remove(e){
        e.preventDefault();
        const self = this;
        self.props.deleteTodo(self.props.todo);
        this.setState();
    }

    switch(e){
        e.preventDefault();
        const self = this;
        let detailToggle = !self.state.detail;
        self.setState({detail: detailToggle});
    }

    render(){
        const self = this;
        let details;
        if(self.state.detail === true){
            details = <TodoDetailViewContainer todo={self.props.todo} />
        } else {
            details = ""
        }
        return(
            <div>
                <li key={self.id}>
                {self.props.todo.title} <button onClick={self.remove}>Delete</button> <button name="done" className={self.state.done} onClick={self.done}>Done</button> <button onClick={self.switch}>Details</button>
                {details}
                </li>
                
            </div>
            
        )
    }
}

export default TodoListItem;