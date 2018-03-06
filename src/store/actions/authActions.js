export const ACTIONS_REGISTER_EMAIL_CHANGE = 'ACTIONS_REGISTER_EMAIL_CHANGE';
export const ACTIONS_REGISTER_PASSWORD_CHANGE = 'ACTIONS_REGISTER_PASSWORD_CHANGE';
export const ACTIONS_REGISTER_USERNAME_CHANGE = 'ACTIONS_REGISTER_USERNAME_CHANGE';

export function changeEmail(text) {
    return {
        type: ACTIONS_REGISTER_EMAIL_CHANGE,
        payload: text
    }
}

export function changePassword(text) {
    return {
        type: ACTIONS_REGISTER_PASSWORD_CHANGE,
        payload: text
    }
}

export function changeUsername(text) {
    return {
        type: ACTIONS_REGISTER_USERNAME_CHANGE,
        payload: text
    }
}