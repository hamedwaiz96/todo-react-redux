import React from 'react';
import uniqueId from '../../util/id';

class StepForm extends React.Component {
    constructor(props){
        super(props);
        this.create = this.create.bind(this);
        this.createStep = this.props.createStep;
        const self = this;
        this.state = {
            title: "",
            done: false,
            todo_id: self.props.todoId
        }
    }

    update(prop){
        return e => this.setState({[prop]: e.target.value})
    }

    create(e){
        e.preventDefault();
        const self = this;
        const step = Object.assign({}, this.state);
        this.createStep(self.props.todoId, {step}).then(
            () => self.setState({ title: "" })
        );
    }

    render(){
        const self = this;
        return(
            <div>
                <form onSubmit={self.create}>
                    <label htmlFor="">Title:
                    <input type="text" value={ self.state.title } onChange={self.update('title')} />
                    </label>
                    <button>Create Step</button>
                </form>
            </div>
            
        )
    }
}

export default StepForm;