import * as AuthTypes from '../actions/authActions';

const INITIAL_STATE = {
    email: '',
    password: '',
    username: '',
    fields: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AuthTypes.ACTIONS_REGISTER_EMAIL_CHANGE:
            return {
                ...state,
                email: action.payload
            };
        case AuthTypes.ACTIONS_REGISTER_PASSWORD_CHANGE:
            return {
                ...state,
                password: action.payload
            };
        case AuthTypes.ACTIONS_REGISTER_USERNAME_CHANGE:
            return {
                ...state,
                username: action.payload
            };
        default:
            return state;
    }
}