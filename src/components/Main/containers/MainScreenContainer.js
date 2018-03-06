import {connect} from 'react-redux';
import {mountApp} from '../../../store/actions/appActions';
import MainScreen from '../components/MainScreen';

const mapStateToProps = (state) => ({
    ...state.app
});

const mapDispatchToProps = {
    mountApp
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreen);