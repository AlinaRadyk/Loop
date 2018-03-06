import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';

import FirstInfoScreen from './components/Auth/components/FirstInfoScreen';
import SecondInfoScreen from './components/Auth/components/SecondInfoScreen';
import LoginScreen from './components/Auth/components/LoginScreen';
import AccountProfileScreen from './components/Profile/AccountProfileScreen';

import RegisterContainer from './components/Auth/containers/RegisterContainer';

export const InfoAuthNavigator = StackNavigator({
    firstInfo: {
        screen: FirstInfoScreen,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    secondInfo: {
        screen: SecondInfoScreen,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    register: {
        screen: RegisterContainer,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    login: {
        screen: LoginScreen,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
});

const MainTabNavigator = TabNavigator({
    profile: {
        screen: AccountProfileScreen
    }
});

export default StackNavigator({
    main: {
        screen: MainTabNavigator,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
})