import React, { Component } from 'react';
import { TextInput, View, Alert, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import { mailChanged, passwordChanged, loginUser } from '../Actions/index';


class LoginForm extends Component {

    clickLogin() {
        const { mail, password } = this.props;
        this.props.loginUser({ mail, password });
    }

    renderButton() {
        if(!this.props.loading) {
            return (
                <TouchableOpacity onPress={ this.clickLogin.bind(this) } >
                    <Text>Login</Text>
                </TouchableOpacity>
            );
        }
        return (
            <ActivityIndicator size="large" />
        );
    }

    render() {
        const { styleMainView, styleViewHead, styleView, styleTextInput, styleTouchableOpacity, styleButton, styleText, styleError } = styles;
        return (
            <View style={styleMainView} >
                
                <View style={styleView} >
                    <TextInput style={styleTextInput} placeholder='Mail' value={this.props.mail} onChangeText = {mail => this.props.mailChanged(mail)} />
                </View>
                <View style={styleView} >
                    <TextInput style={styleTextInput} placeholder='Password' value={this.props.password} onChangeText = {password => this.props.passwordChanged(password)} secureTextEntry={true} />
                </View>
                <View style={styleView} >
                    { this.renderButton() }
                </View>
            </View>
        );
    }
};

const styles = {
    styleMainView: {
        marginTop: '5%',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        flex: 1
    },
    styleViewHead:{
        height: 75,
        width: '100%',
        height: 70,
    },
    styleView: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleTextInput: {
        width: '80%',
        height: 35,
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 1,
        fontSize: 18,
    },
    styleTouchableOpacity: {
        width: '80%',
        height: 35,
        borderColor: '#4f70a3',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    styleButton: {
        fontSize: 21,
        color: '#456aa5',
        fontWeight: '700'
    },
    styleText: {
        fontSize: 25,
        color: '#53847c',
        marginLeft: '10%',
    },
    styleError: {
        height:20,
        fontSize: 14,
        color: '#a5242a',
        marginLeft: '10%',
        marginTop: 15
    }
}


const mapStateToProps = ({ LoginControllRes }) => {
    const { mail, password, loading } = LoginControllRes;
    return {
        mail,
        password,
        loading
    };
}; 


export default connect(mapStateToProps, { mailChanged, passwordChanged, loginUser })(LoginForm) ;