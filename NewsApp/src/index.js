import React, {Component} from 'react';
import { View, Text, Dimensions } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import HomePage from './Pages/Home';
import PoliticsPage from './Pages/Politics';
import SocietyPage from './Pages/Society';
import EconomyPage from './Pages/Economy';
import SportPage from './Pages/Sport';
import WorldPage from './Pages/World';
import GaleryPage from './Pages/Galery';

import NewsPage from './Pages/NewsPage';

import { Home, Politics, Society, Economy, Sport, World, Gallery, News, Main } from './Structs/screenNames';


var { height, width } = Dimensions.get('window');

let routeConfigs = {
    Home: {
        path: '/',
        screen: HomePage
    },
    Politics: {
        path: '/Politics',
        screen: PoliticsPage
    },
    Society: {
        path: '/Society',
        screen: SocietyPage
    },
    Economy: {
        path: '/Economy',
        screen: EconomyPage
    },
    Sport: {
        path: '/Sport',
        screen: SportPage
    },
    World: {
        path: '/World',
        screen: WorldPage
    },
    Gallery: {
        path: '/Galery',
        screen: GaleryPage
    }
    
};

let drawerNavigatorConfig = {
    initialRouteName: Home,
    headerMode: 'screen',
    drawerWidth: width/2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
        activeTintColor: '#4a75ba',
    },
    order: [Home, Politics, Society, Economy, Sport, World, Gallery]
};





const AppBeginner = DrawerNavigator(routeConfigs, drawerNavigatorConfig);

AppBeginner.navigationOptions = {
    header: null
}

const SimpleApp = StackNavigator(
    {
        Main: { 
            screen: AppBeginner,
            
        },
        News: { 
            screen: NewsPage, 
            navigationOptions: (props) => ({
                title: "News",
            })
        }
    }
);

export default SimpleApp;