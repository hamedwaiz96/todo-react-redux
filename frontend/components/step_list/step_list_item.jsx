import React from 'react';

class StepListItem extends React.Component {
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }

    remove(e){
        e.preventDefault();
        const self = this;
        self.props.removeStep(self.props.step);
    }

    update(e){
        e.preventDefault();
        const self = this;
        const done = e.target;
        let toggleDone = !self.props.step.done;
        let step1 = {
            id: self.props.step.id,
            title: self.props.step.title,
            done: toggleDone,
            todo_id: self.props.step.todo_id
        }
        self.props.receiveStep(step1);
        if (done.className === "done") {
            done.className = "";
        } else {
            done.className = "done";
        }
        this.setState();
    }

    render(){
        const self = this;
        return (
            <li key={self.props.step.id}>
            Title: {self.props.step.title}
            <button onClick={self.remove}>Delete Step</button>
            <button onClick={self.update}>Done</button>
            </li>
        )
    }
}

export default StepListItem;