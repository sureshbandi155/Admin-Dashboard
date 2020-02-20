import axios from 'axios';
// import { push } from 'redux-router';
import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};
export const authSuccess = (email) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        email: email
    };
};
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};
// export const logout = () => {
//     return {
//         type: actionTypes.AUTH_LOGOUT
//     };
// }
// export const checkAuthTimeout = (expirationTime) => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(logout())
//         }, expirationTime * 1000);

//     }
// };
export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        axios.post('http://localhost:4000/login', authData)
            .then(response => {
                console.log(response);
                // var test = response.config.data.split();
                var test = response.config.data; //string format
                var test1 = JSON.parse(test); //convert string to object
                // var userName = response.data; to get login user name
                console.log(test1.email);
                dispatch(authSuccess(test1.email));
                // dispatch(push('/login'));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error))
            });
    };
};