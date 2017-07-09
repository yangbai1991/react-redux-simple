import * as actionTypes from '../constants/userinfo';

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return action.data;
        case actionTypes.LOGOUT:
            return {};
        default:
            return state;
    }
}