import React from 'react';

class StepListItem extends React.Component {
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
    }

    remove(e){
        e.preventDefault();
        
    }

    render(){
        const self = this;
        return (
            <li>
            Title: {self.props.step.title} Body: {self.props.step.body}
            <button onClick={self.remove}>Delete Step</button>
            </li>
        )
    }
}

export default StepListItem;