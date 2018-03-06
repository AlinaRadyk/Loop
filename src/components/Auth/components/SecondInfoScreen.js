import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {auth} from "../styles/AuthStyles";
import NavigationService from "../../../services/navigation/NavigationService";

class SecondInfoScreen extends Component {
    render() {
        return (
            <View style={auth.view}>
                <View style={auth.viewLogoAndTextSecond}>
                    <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={auth.bigText}>
                            LOOP
                        </Text>
                        <View style={auth.viewText}>
                            <Text style={auth.whiteText}>
                                Quickly find local activities and events that your kids will love. Holidays sorted!
                            </Text>
                        </View>
                        <View style={auth.viewText}>
                            <Text style={auth.whiteText}>
                                Get a deal!
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={auth.buttonNext}
                        onPress={() => NavigationService.navigate('register')}
                    >
                        <Icon
                            name="angle-right"
                            color='#BADC5F'
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <View style={auth.viewImage}>

                </View>
            </View>
        );
    }
}

export default SecondInfoScreen;