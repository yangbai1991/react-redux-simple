import React, { PureComponent } from 'react';

import UserInfo from './subpage/userinfo';

class App extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <UserInfo/>
            </div>
        );
    }
}

export default App;