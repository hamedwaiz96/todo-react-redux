import React from 'react';

class TodoDetailView extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const self = this;
            return (
                <ul>
                    <li>id: {self.props.todo.id}</li>
                    <li>body: {self.props.todo.body}</li>
                </ul>
            )
    }
}

export default TodoDetailView;