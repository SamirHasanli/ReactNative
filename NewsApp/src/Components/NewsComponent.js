import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    View, 
    ScrollView, 
    Image, 
    Text, 
    Dimensions, 
    NavigatorIOS, 
    TouchableOpacity , 
    TouchableHighlight
} from 'react-native';


import { NewsQueryChanged } from '../actions/index'
import NewsPage from '../Pages/NewsPage';



class NewsComponent extends React.Component{
    clickTouch(){
        this.props.navigation.navigate("News");
        this.props.NewsQueryChanged(this.props.urlList);
    }
    
    
    render(){
        return(
            <TouchableOpacity onPress={ () => this.props.navigation.navigate('News', {id: this.props.urlList})} >
                <View style={ style.styleView }>
                        <Image source={{ uri: this.props.image }} style={ style.styleImage } />
                        <Text style={ style.styleText }>{ this.props.title }</Text>
                </View>
            </TouchableOpacity>
        );
    }
    
};


var { height, width } = Dimensions.get('window');
const style = {
    styleView: {
        width: width - 20,
        borderBottomWidth: 1,
        borderBottomColor: '#939393',
        borderStyle: 'dotted',
        marginLeft: 10,
        marginBottom: 20,
    },
    styleImage: {
        width: width - 20,
        height: width*0.7
    },
    styleText: {
        marginBottom: 10,
        marginTop: 10,
        fontSize: 16,
        color: '#161616'
    }
};

const mapStateToProps = ({ NewsQueryResponse }) => {
    const { id } = NewsQueryResponse;
    return { id };
};


export default connect(mapStateToProps, { NewsQueryChanged })(NewsComponent);