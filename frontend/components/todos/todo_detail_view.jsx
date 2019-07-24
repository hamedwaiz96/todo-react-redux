import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const self = this;
            return (
                <StepListContainer todo={self.props.todo} todo_id={self.props.todo.id} />
            )
    }
}

export default TodoDetailView;