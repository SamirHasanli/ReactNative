import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';

import { World } from '../Structs/pages';
import HeaderMenuBar from '../Components/HeaderMenuBar';
import NewsList from '../Components/NewsList';

class WorldPage extends Component {
    static navigationOptions = ({ navigation }) => {
        let drawerLabel = World;
        return { drawerLabel };
    };
    render(){
        return (
            <View style={ style.styleView }>
                <HeaderMenuBar {...this.props} title={ World } />
                <View style={ style.styleViewContent }>
                    <NewsList navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
    
};

const style = {
    styleView: {
        flex: 1, 
        flexDirection: 'column'
    },
    styleViewContent: {
        flex: 1, 
        backgroundColor: '#eee'
    }
};

export default WorldPage;