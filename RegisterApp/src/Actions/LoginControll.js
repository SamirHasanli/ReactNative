import {Alert} from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

import { 
    MAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER, 
    LOGIN_USER_SUCCES, 
    LOGIN_USER_FAIL,
    LOGIN_USER_EMPTY_AREA
} from '../structs/typesRedux'



export const mailChanged = (mail) => {
    return (dispatch) => {
        dispatch({
            type: MAIL_CHANGED,
            payload: mail
        });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password
        });
    };
};

export const loginUser = ({mail, password}) => {
    return (dispatch) => {
        dispatch ({ type: LOGIN_USER });

        if(mail === '' || password === '') {
            { loginEmptyArea(dispatch); }
        }else {
            //firebase.auth().createUserWithEmailAndPassword(mail, password).then(user => loginSucces(dispatch, user)).catch(() => loginFail());
            firebase.auth().signInWithEmailAndPassword(mail, password).then(user => loginSucces(dispatch, user)).catch(() => {
                loginFail(dispatch);
            });
        }
    };
};


const loginEmptyArea = (dispatch) => {
    
    this.setTimeout(() => {
        dispatch({
            type: LOGIN_USER_EMPTY_AREA
        });
        Alert.alert(
            'Message',
            'Empty input area',
            [
                { text: 'Okey', onPress: () => null }
            ]
        );
    }, 1000);
    
    
    
};

const loginSucces = (dispatch, user) => {
    
    dispatch({
        type: LOGIN_USER_SUCCES,
        payload: user
    });

    Actions.main();
    
};

const loginFail = (dispatch) => {
    
    this.setTimeout(() => {
        dispatch({
            type: LOGIN_USER_FAIL
        });

        Alert.alert(
            'Message',
            'Login Fail',
            [
                { text: 'Okey', onPress: () => null }
            ]
        );
    }, 1000);
    
};