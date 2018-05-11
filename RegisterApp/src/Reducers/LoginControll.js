import { 
    MAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER, 
    LOGIN_USER_SUCCES, 
    LOGIN_USER_FAIL,
    LOGIN_USER_EMPTY_AREA 
} from '../structs/typesRedux';
import { loginUser } from '../Actions';

const INITIAL_STATE = {
    mail: '',
    password: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MAIL_CHANGED :
            return { ...state, mail: action.payload };
        case PASSWORD_CHANGED : 
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCES :
            return { ...state, loading: false };
        case LOGIN_USER_FAIL :
            return { ...state, loading: false };
        case LOGIN_USER_EMPTY_AREA :
            return { ...state, loading: false };
        default :
            return state;
    }
};