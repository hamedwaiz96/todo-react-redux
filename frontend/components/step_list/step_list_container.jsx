import { createStep, fetchSteps } from "../../actions/step_actions";
import { stepsByTodoId } from '../../reducers/selectors';
import {connect} from 'react-redux';
import StepList from './step_list';

const mapStateToProps = (state, {todo_id}) => ({
    steps: stepsByTodoId(state, todo_id),
    todo_id
})

const mapDispatchToProps = dispatch => ({
    createStep: (todo_id, step) => dispatch(createStep(todo_id, step)),
    fetchSteps: (todo_id) => dispatch(fetchSteps(todo_id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StepList)