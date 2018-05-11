import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

import {StackNavigator} from 'react-navigation';

class NewsPage extends Component {
    
    
    render(){
        const { params } = this.props.navigation.state;
        return(
            <View>
                
                <Text>{params.id}</Text>
                
            </View>
        );
    }
}

export default NewsPage;