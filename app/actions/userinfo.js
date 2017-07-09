import * as actionTypes from '../constants/userinfo';

export const login = data => {
    return { type: actionTypes.LOGIN, data };
}

export const logout = data => {
    return { type: actionTypes.LOGOUT, data };
}