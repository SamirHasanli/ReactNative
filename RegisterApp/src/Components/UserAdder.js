import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
import { connect } from 'react-redux';

import { userAdderInputChange } from '../Actions';

class UserAdder extends Component {

    // clickLogin() {
    //     const { firstname, lastname, mail, password } = this.props;
    //     this.props.loginUser({ firstname, lastname, mail, password });
    // }

    render() {
        const { styleMainView, styleViewHead, styleView, styleTextInput, styleTouchableOpacity, styleButton, styleText, styleError } = styles;
        return (
            <View style={styleMainView}>
                <View  >
                    <View style={styleView} >
                        <TextInput style={styleTextInput} placeholder='FirstName' value={ firstname = this.props.firstname } onChange={ firstname = this.props.userAdderInputChange({ props: 'firstname', value: firstname })} />
                    </View>
                    <View style={styleView} >
                        <TextInput style={styleTextInput} placeholder='LastName' value={ lastname = this.props.lastname } onChange={ lastname = this.props.userAdderInputChange({ props: 'lastname', value: lastname })} />
                    </View>
                    <View style={styleView} >
                        <TextInput style={styleTextInput} placeholder='Mail' value={ mail = this.props.mail } onChange={ mail = this.props.userAdderInputChange({ props: 'mail', value: mail })} />
                    </View>
                    <View style={styleView} >
                        <TextInput style={styleTextInput} placeholder='Password' secureTextEntry={true} value={ password = this.props.password } onChange={ password = this.props.userAdderInputChange({ props: 'password', value: password })} />
                    </View>
                    <View style={{alignItems: 'center'}} value={ region = this.props.region } onChange={ region = this.props.userAdderInputChange({ props: 'region' })} >
                        <Picker style={{width: '80%'}}>
                            <Picker.Item label="MacBook" value="m" />
                            <Picker.Item label="Iphone" value="i" />
                        </Picker>
                    </View>
                    <View style={styleView} >
                        <TouchableOpacity  >
                            <Text>Login</Text>
                        </TouchableOpacity>
                    </View>
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
    styleViewHead: {
        justifyContent: 'center',
        alignItems: 'center',
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
        height: 20,
        fontSize: 14,
        color: '#a5242a',
        marginLeft: '10%',
        marginTop: 15
    }
}

const mapToStateProps = ({ userAdderResponse }) => {
    const { firstname, lastname, mail, region, password } = userAdderResponse;
    return { firstname, lastname, mail, region, password };
};

export default connect(mapToStateProps, userAdderInputChange)(UserAdder);