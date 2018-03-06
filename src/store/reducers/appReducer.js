import * as AppTypes from '../actions/appActions';

const INITIAL_STATE = {
    applicationMounted: false,
    user: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AppTypes.APPLICATION_MOUNTED:
            return {
                ...state,
                applicationMounted: true
            };
        default:
            return state;
    }
}