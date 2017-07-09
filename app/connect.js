import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default (App, actions, type) => {
    const mapStateToProps = state => {
        return state[type] || state;
    };

    const mapDispatchToProps = dispatch => {
        return bindActionCreators(actions, dispatch);
    };

    return connect(
        mapStateToProps,
        mapDispatchToProps
    )(App);
};