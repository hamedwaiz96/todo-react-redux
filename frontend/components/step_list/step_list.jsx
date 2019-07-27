import React from 'react';
import StepForm from './step_form';
import StepListItemContainer from './step_list_item_container';

class StepList extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
        const self = this;
        this.props.fetchSteps(self.props.todo_id);
    }

    render(){
        const self = this;
        return (
            <div>
                <ul>
                    {self.props.steps.map((step) => {
                        return (
                            <StepListItemContainer step={step} />
                        )
                    })}
                </ul>
                <StepForm createStep={self.props.createStep} todoId={self.props.todo_id} />
            </div>
        )
    }
}

export default StepList;