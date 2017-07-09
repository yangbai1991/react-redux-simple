import React, { PureComponent } from 'react';

import * as actions from 'app/actions/userinfo';
import connect from 'app/connect';

import './index.css';

class App extends PureComponent {
    constructor(props, context) {
        super(props, context);

        this._login = this._login.bind(this);
    }

    componentDidMount() {
        this.props.login({ name: 'yangbai' });
    }

    _login() {
        this.props.login({ name: 'sara' });
    }

    render() {
        return (
            <div className="userinfo">
                <h2>{ this.props.name }</h2>
                <button onClick={ this._login }>Login</button>
                <button onClick={ this.props.logout }>Logout</button>
            </div>
        );
    }
}

export default connect(App, actions, 'userinfo');