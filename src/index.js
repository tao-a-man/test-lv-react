import React from 'react';
import ReactDOM from 'react-dom';

// container
import App from './containers/App';
import Admin from './containers/Admin';
import User from './containers/User';
import Home from './containers/Home';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import IntlProviderWrapper from './hoc/IntlProviderWrapper';
const reduxReducer = createStore(rootReducer);
const renderApp = () => {
    ReactDOM.render(
        <Provider store={reduxReducer}>
            <IntlProviderWrapper>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App />}>
                            <Route path="admin" element={<Admin />}></Route>
                            <Route path="user" element={<User />}></Route>
                            <Route index element={<Home />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </IntlProviderWrapper>
        </Provider>,
        document.getElementById('root'),
    );
};

renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
