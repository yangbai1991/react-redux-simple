import React, { PureComponent } from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';

import Header from '../containers/Header';
import Footer from '../containers/Footer';
import Home from '../containers/Home';
import List from '../containers/List';

class RouterMap extends PureComponent {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/list">List</Link></li>
                    </ul>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/list" component={ List }/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default RouterMap;