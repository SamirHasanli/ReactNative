import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/Reducers/index';
import App from './src';



class ExportApp extends Component{
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }

};


AppRegistry.registerComponent('NewsAPP', () => ExportApp);
