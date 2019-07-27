import React from 'react';

class StepListItem extends React.Component {
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        const self = this;
        this.state = { done: self.props.step.done.toString() }
    }

    remove(e){
        e.preventDefault();
        const self = this;
        self.props.deleteStep(self.props.step);
        self.setState();
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
        self.props.updateStep(step1);
        if (done.className === "true") {
            done.className = "false";
        } else {
            done.className = "true";
        }
        this.setState({ done: toggleDone.toString() });
    }

    render(){
        const self = this;
        return (
            <li key={self.props.step.id}>
            Title: {self.props.step.title}
            <button onClick={self.remove}>Delete Step</button>
            <button onClick={self.update} className={self.state.done}>Done</button>
            </li>
        )
    }
}

export default StepListItem;