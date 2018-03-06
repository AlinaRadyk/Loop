import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {initStyles} from "./styles/InitStyles";

class InitScreen extends Component {
    render() {
        return (
            <View style={initStyles.view}>
                <View style={initStyles.viewLogo}>
                    <Text style={initStyles.bigText}>
                        LOOP
                    </Text>
                    <Text style={initStyles.smallText}>
                        Find The Fun!
                    </Text>
                </View>
                <View style={initStyles.viewImage}>

                </View>
            </View>
        );
    }
}

export default InitScreen;