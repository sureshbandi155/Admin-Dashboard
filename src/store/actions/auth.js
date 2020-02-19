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
        // let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=\n' +
        //     'AIzaSyBn875LSrphDjICQ-OWqj15GKzCRwsp8qQ';
        // if (!isSignup) {
        //     url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBn875LSrphDjICQ-OWqj15GKzCRwsp8qQ';
        // }
        axios.post('http://localhost:4000/login', authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.config.data));
                // dispatch(push('/login'));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error))
            });
    };
};