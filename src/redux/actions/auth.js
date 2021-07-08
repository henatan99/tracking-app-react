import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
} from './actionTypes';

import AuthService from '../services/auth.service';
import username from '../reducers/username';

export const register = (username) => (dispatch) => {
    return AuthService.register(username)
        .then((response) => {
                dispatch({
                    type: REGISTER_SUCCESS,
                });
                
                dispatch({
                    type: SET_MESSAGE,
                    payload: response.data.message,
                });

                return Promise.resolve();
            },

            (error) => {
                const message = (
                    error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                    error.message || error.toString();

                dispatch({
                    type: REGISTER_FAIL,
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: message,
                });

                return Promise.reject();                
            }
        ) 
}

export const login = (username) => (dispatch) => {
    return AuthService.login(username).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },

        (error) => {
            const message = 
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });

            dispatch({
                type: SET_MESSAGE,
                payload: message,
            })

            return Promise.reject();
        }
    )
};

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    });
};