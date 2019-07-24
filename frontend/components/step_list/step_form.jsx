import React from 'react';
import uniqueId from '../../util/id';

class StepForm extends React.Component {
    constructor(props){
        super(props);
        this.create = this.create.bind(this);
    }

    create(e){
        e.preventDefault();
        const self = this;
        let titleInput = document.querySelector("input");
        let new_step = {
            id: uniqueId(),
            title: titleInput.value,
            done: false,
            todo_id: self.props.todoId
        }
        self.props.receiveStep(new_step);
        titleInput.value = "";
        self.setState();
    }

    render(){
        const self = this;
        return(
            <form action="">
                <label htmlFor="">Title:
                    <input type="text" />
                </label>
                <button onClick={self.create}>Create Step</button>
            </form>
        )
    }
}

export default StepForm;