//Node Modules
import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

//Reducers, Actions, Components
import Reducers from './Reducers/index'
import Router from './Routers/Router';

class AppBeginner extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyAlXGAKKsFGRedQnG9_CwcJmdQSD3r3yJ0',
            authDomain: 'form-5b2be.firebaseapp.com',
            databaseURL: 'https://form-5b2be.firebaseio.com',
            projectId: 'form-5b2be',
            storageBucket: 'form-5b2be.appspot.com',
            messagingSenderId: '942707730547'
        });
    }

    render(){
        const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <View style={ style.styleView } >
                    <Router/>
                </View>
            </Provider>
        );
    }
    
};

const style = {
    
    styleView: {
        width: '100%',
        height: '100%',
        marginBottom: 0,
    }
    
    
    
};

export default AppBeginner;