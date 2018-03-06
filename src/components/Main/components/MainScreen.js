import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform, StyleSheet, View} from 'react-native';

import Navigator, {InfoAuthNavigator} from '../../../Navigator';
import NavigationService from "../../../services/navigation/NavigationService";

import InitialScreen from '../../Init/InitScreen';

class MainScreen extends Component {
    render() {

        if (!this.props.applicationMounted) {
            return (
                <View style={{flex: 1}}>
                    <View style={main.statusBar}/>
                    <InitialScreen/>
                </View>
            );
        }

        if (!this.props.user) {
            return (
                <View style={{flex: 1}}>
                    <View style={main.statusBar}/>
                    <InfoAuthNavigator
                        ref={NavigationService.setContainer}
                    />
                </View>
            );
        }

        return (
            <View style={{flex: 1}}>
                <View style={main.statusBar}/>
                <Navigator
                    ref={NavigationService.setContainer}
                />
            </View>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.mountApp();
        }, 2000);
    }
}

const main = StyleSheet.create({
    statusBar: {
        paddingTop: Platform.OS === 'android' ? 0 : 20,
        backgroundColor: '#1DBBB2'
    }
});

MainScreen.propTypes = {
    user: PropTypes.any,
    mountApp: PropTypes.func.isRequired,
    applicationMounted: PropTypes.bool.isRequired
};

export default MainScreen;