import React from 'react';

class StepList extends React.Component {
    constructor(props){
        super(props);
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
                <StepForm receiveStep={self.props.receiveStep} />
            </div>
        )
    }
}

export default StepList;