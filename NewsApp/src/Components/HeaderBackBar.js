import React, {Component} from 'react';
import Button from 'react-native-button';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Dimensions
} from 'react-native';

var { height, width } = Dimensions.get('window');
var windowWidth = width - 84;

const style = {
    styleView : {
        height: 40, 
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center'
    },
    styleTouchableHighlight : {
        width: 32, 
        height: 32, 
        marginLeft: 10
    },
    styleImage : {
        width: 32, 
        height: 32
    },
    styleViewCenter : {
        alignItems: 'center', 
        width: windowWidth
    },
    styleCenterText : {
        fontSize: 17,
        color: '#161616'
    }
};

export default class HeaderMenuBar extends Component {
    
    clickFunc(){
        const { navigate } = this.props.navigation;
        navigate('DrawerOpen');
    }
    render(){
        return (
            <View style={ style.styleView } >
                <TouchableHighlight style={ style.styleTouchableHighlight } onPress={this.clickFunc.bind(this)} >
                    <Image style= { style.styleImage } source={require('../icons/menu-icon.png')} />
                </TouchableHighlight>
                <View style={ style.styleViewCenter } >
                    <Text style={ style.styleCenterText } >{ this.props.title }</Text>
                </View>
            </View>
        );
    }
}