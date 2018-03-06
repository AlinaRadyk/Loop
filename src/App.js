import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Store from './store';

import MainScreenContainer from './components/Main/containers/MainScreenContainer';

class App extends Component<Props> {
    render() {
        return (
            <Provider store={Store}>
                <MainScreenContainer/>
            </Provider>
        );
    }
}

export default App;