import React from 'react';
import uniqueId from '../../util/id';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.createTodo = this.props.createTodo;
        this.addTodo = this.addTodo.bind(this);
        this.update = this.update.bind(this);
        const self = this;
        this.state = {
            title: "",
            body: "",
            done: false
        }
    }

    update(sel){
        return e => this.setState({[sel]: e.target.value})
    }

    addTodo(e){
        e.preventDefault();
        const self = this;
        const todo = Object.assign({}, this.state);
        this.createTodo({todo}).then(
            () => self.setState({title: "", body: ""})
        );
    }

    render(){
        const self = this;
        let error1;
        if(self.props.errors.length > 0){
            error1 = (<ul>
                {self.props.errors.map((error) => {
                    return(
                        <li>{error}</li>
                    )
                })}
            </ul>)
        }  else {
            error1 = "";
        }
        return(
            <div>
                {error1}
                <form onSubmit={self.addTodo}>
                    <input type="text" name="title" value={self.state.title} onChange={self.update('title')} />
                    <input type="text" name="body" value={self.state.body} onChange={self.update('body')} />
                    <input type="submit" />
                </form>
            </div>
            
        )
    }
}

export default TodoForm;