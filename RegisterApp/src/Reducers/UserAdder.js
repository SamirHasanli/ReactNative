import { USER_ADDER_IN_CHANGE } from '../structs/typesRedux';


const INITIAL_STATE = {
    firstname: '',
    lastname: '',
    mail: '',
    region: '',
    password: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case USER_ADDER_IN_CHANGE:
            return { ...state, [action.payload.props] : action.payload.value };
        default:
            return state;
    }
};