import React, { Component } from 'react';
import { View, ScrollView, Image, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';


import NewsComponent from './NewsComponent';
import NewsPage from '../Pages/NewsPage';


var { height, width } = Dimensions.get('window');



const style = {
    styleScrollView: {
        width: '100%',
        marginTop: 10
    }
};

class NewsList extends Component {

    state = { data: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ data: response.data }));
    }

    componentDidMount() {

    }

    myrenderApi() {
        return this.state.data.map((responseData, Id) =>
            <NewsComponent key={Id} image={responseData.image} title={responseData.title} urlList={responseData.url} navigation={this.props.navigation} />
        );
    }


    render() {
        
        return (
            <ScrollView style={style.styleScrollView} showsVerticalScrollIndicator={false} >
                {this.myrenderApi()}
            </ScrollView>
        );
    }
};


export default NewsList;

