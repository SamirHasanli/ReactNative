import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import AppBeginner from './src/index';

const App  = () => {

    return (
        <View style={style.styleView}>
            <AppBeginner/>
        </View>
    );
    
};

const style = {
    styleView: {
        width: '100%',
        height: '100%',
        //marginTop: '5%',
        backgroundColor: '#fff'
    }
    
};

AppRegistry.registerComponent('Register', () => App);
