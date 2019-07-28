import React from 'react';
import StepListContainer from '../step_list/step_list_container';

class TodoDetailView extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const self = this;
            return (
                <div>
                    <ul>{self.props.todo.tags.map((tag) => {
                        return (
                            <li>{tag.name}</li>
                        )
                    })}</ul>
                    <StepListContainer todo={self.props.todo} todo_id={self.props.todo.id} />
                </div>
            )
    }
}

export default TodoDetailView;