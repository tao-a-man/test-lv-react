import React from 'react';
import ReactDOM from 'react-dom';

// container
import App from './containers/App';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';

const reduxReducer = createStore(rootReducer);
const renderApp = () => {
    ReactDOM.render(
        <Provider store={reduxReducer}>
            <App />
        </Provider>,
        document.getElementById('root'),
    );
};

renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
