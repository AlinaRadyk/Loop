import React from 'react';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native';

const Input = ({refer, value, placeholder, secureTextEntry, keyboardType, returnKeyType, autoCapitalize, error, editable, onChangeText, onEndEditing}) => {
    const stateStyle = error ? styles.error : {};
    const inputStyle = {...styles.input, ...stateStyle};
    return (
        <TextInput
            ref={refer}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            autoCapitalize={autoCapitalize}
            autoCorrect={false}
            style={inputStyle}
            value={value}
            editable={editable}
            underlineColorAndroid='transparent'
            placeholderTextColor={'#000000'}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
        />
    );
};

const styles = {
    input: {
        color: '#000000',
        backgroundColor: '#ffffff',
        fontSize: 15,
        lineHeight: 23,
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ffffff',
        padding: 5,
        borderRadius: 2
    },
    error: {
        borderWidth: 1,
        borderColor: 'red'
    }
};

Input.propTypes = {
    value: PropTypes.string.isRequired,
    error: PropTypes.bool,
    onChangeText: PropTypes.func.isRequired,
    ...TextInput.propTypes
};

export {Input};