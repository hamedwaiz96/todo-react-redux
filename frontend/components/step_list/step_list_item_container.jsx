import {connect} from 'react-redux';
import {deleteStep, updateStep} from '../../actions/step_actions';
import StepListItem from './step_list_item';

const mapDispatchToProps = dispatch => ({
    deleteStep: (step) => dispatch(deleteStep(step)),
    updateStep: (step) => dispatch(updateStep(step))
})

export default connect(
    null,
    mapDispatchToProps
)(StepListItem)