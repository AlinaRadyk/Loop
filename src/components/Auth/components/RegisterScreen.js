import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {AccessToken, GraphRequest, GraphRequestManager, LoginButton} from 'react-native-fbsdk';

import {Input} from '../../commons/Input';

import {auth} from "../styles/AuthStyles";

class RegisterScreen extends Component {
    //Actions
    onEmailChange = (text) => {
        this.props.changeEmail(text);
    };

    onPasswordChange = (text) => {
        this.props.changePassword(text);
    };

    onUsernameChange = (text) => {
        this.props.changeUsername(text);
    };

    onFacebook = (error, result) => {
        const {onLogin} = this.props;
        if (error) {
        } else {
            const {id} = result;
            onLogin({login: `${id}@facebook.com`, password: 'nopassword'}, true);
        }
    };

    //Renders
    renderInputUsername = () => (
        <Input
            placeholder='Username'
            value={this.props.username}
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={this.onUsernameChange}
            error={this.props.fields.includes("username")}
            onEndEditing={() => {
                this.emailInput.focus();
            }}
        />
    );

    renderInputEmail = () => (
        <Input
            refer={(ref) => this.emailInput = ref}
            placeholder='Email'
            value={this.props.email}
            keyboardType="email-address"
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={this.onEmailChange}
            error={this.props.fields.includes("email")}
            onEndEditing={() => {
                this.passwordInput.focus();
            }}
        />
    );

    renderInputPassword = () => (
        <Input
            refer={(ref) => this.passwordInput = ref}
            secureTextEntry
            placeholder='Password'
            value={this.props.password}
            returnKeyType="done"
            onChangeText={this.onPasswordChange}
            error={this.props.fields.includes("password")}
        />
    );

    render() {
        return (
            <View style={auth.viewRegisterForm}>
                <View style={auth.containerInput}>
                    {this.renderInputUsername()}
                </View>
                <View style={auth.containerInput}>
                    {this.renderInputEmail()}
                </View>
                <View style={auth.containerInput}>
                    {this.renderInputPassword()}
                </View>
                <View  style={auth.containerInput}>
                    <LoginButton
                        onLoginFinished={(error, result) => {
                            if (error) {
                            } else if (result.isCancelled) {
                            } else {
                                AccessToken.getCurrentAccessToken()
                                    .then((data) => {
                                        const infoRequest = new GraphRequest(
                                            '/me',
                                            null,
                                            this.onFacebook,
                                        );

                                        new GraphRequestManager()
                                            .addRequest(infoRequest)
                                            .start();
                                    });
                            }
                        }}
                    />
                </View>
            </View>
        );
    }
}

RegisterScreen.propTypes = {
    email: PropTypes.string.isRequired,
    fields: PropTypes.array.isRequired,
    password: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    changeEmail: PropTypes.func.isRequired,
    changeUsername: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired
};

export default RegisterScreen;