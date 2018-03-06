import {connect} from 'react-redux';
import RegisterScreen from '../components/RegisterScreen';

import {
    changeEmail,
    changePassword,
    changeUsername
} from '../../../store/actions/authActions';

const mapStateToProps = (state) => ({
    ...state.auth
});

const mapDispatchToProps = {
    changeEmail,
    changePassword,
    changeUsername
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterScreen);