import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps !== this.props) {
            return false;
        }

        return true;
    }
    state = {};
    render() {
        console.log('re-render Header');
        return (
            <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                    <NavLink className="nav-link" to="/">
                        Active
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to="admin">
                        <FormattedMessage id={'homeHeader.admin'} />
                    </NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to="user">
                        User
                    </NavLink>
                </Nav.Item>
            </Nav>
        );
    }
}

export default Header;
