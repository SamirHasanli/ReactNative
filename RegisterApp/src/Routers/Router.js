import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';


import LoginForm from '../Components/LoginForm';
import UserList from '../Components/UserList';
import UserAdder from '../Components/UserAdder';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{marginTop: 50}}>
            <Scene key="account" >
                <Scene key="login" component={LoginForm} title="Login" />
            </Scene>

            <Scene key="main">
                <Scene onRight={ () => Actions.adder() } rightTitle="New" key="userlist" component={UserList} title="User List" />
                <Scene key="adder" component={ UserAdder } title="Adder" />
            </Scene>
        </Router>
    );
};

const style = {
    styleRouter: {
        
    }
};


export default RouterComponent;