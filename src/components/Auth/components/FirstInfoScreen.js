import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {auth} from "../styles/AuthStyles";
import NavigationService from "../../../services/navigation/NavigationService";

class FirstInfoScreen extends Component {
    render() {
        return (
            <View style={auth.view}>
                <View style={auth.viewImage}>

                </View>
                <View style={auth.viewLogoAndText}>
                    <Text style={auth.bigText}>
                        LOOP
                    </Text>
                    <View style={auth.viewText}>
                        <Text style={auth.whiteText}>
                            Keeping you in the Loop with all kids activities and events
                        </Text>
                    </View>
                    <View style={auth.viewText}>
                        <Text style={auth.whiteText}>
                            Find, Book, Enjoy!
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={auth.buttonNext}
                        onPress={() => NavigationService.navigate('secondInfo')}
                    >
                        <Icon
                            name="angle-right"
                            color='#BADC5F'
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default FirstInfoScreen;