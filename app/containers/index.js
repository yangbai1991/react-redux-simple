import React, { PureComponent } from 'react';

class App extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

export default App;