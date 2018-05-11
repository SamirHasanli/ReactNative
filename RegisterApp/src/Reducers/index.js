import { combineReducers } from 'redux';
import LoginControll from './LoginControll';
import UserAdder from './UserAdder';

export default combineReducers({
    LoginControllRes: LoginControll,
    userAdderResponse: UserAdder
});
