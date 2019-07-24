import {RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP} from '../actions/step_actions';
import {merge} from 'lodash';

const initialState = {
    1: {
        id: 1,
        title: "go to store",
        done: false,
        todo_id: 1
    },
    2: {
        id: 2,
        title: "buy car soap",
        done: false,
        todo_id: 1
    },
    3: {
        id: 3,
        title: "go to petsmart",
        done: false,
        todo_id: 2
    },
    4: {
        id: 4,
        title: "buy dog soap",
        done: false,
        todo_id: 2
    }
}

const stepsReducer = (state=initialState, action) => {
    switch(action.type){
        case(RECEIVE_STEPS):
            let new_obj = {};
            for(let i = 0; i < action.steps.length; i++){
                let new_step = action.steps[i];
                new_obj[new_step.id] = new_step;
            }
            return new_obj;
        case(RECEIVE_STEP):
            const new_obj1 = {};
            new_obj1[action.step.id] = action.step;
            const initial_steps = Object.assign({}, state);
            const new_obj2 = merge(initial_steps, new_obj1);
            return new_obj2;
        case(REMOVE_STEP):
            const id = action.step.id;
            delete state[id];
            const new_state = Object.assign({}, state);
            return new_state;
        default:
            return state;
    }
}

export default stepsReducer;