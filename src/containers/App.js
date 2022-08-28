import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <Outlet />
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.users,
    };
};

export default connect(mapStateToProps)(App);
