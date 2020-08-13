import axios from 'axios';
import jwt_decode from 'jwt_decode';
import setAuthToken from '../utils/setAuthTaken.js';
import { ERROR_MSG, SET_CURRENT_USER } from './types';

export const loginUser = (userData,history) => dispatch => {
    axios.post('./api/users/login',userData)
    .then(res =>{
        const {token} = res.data;
        localStorage.setItem('jwToken',token)
        setAuthToken(token)
        const decoded = jwt_decode(token)
        dispatch(resCurrentUser(decoded))
    }).catch(err => {
        dispatch({
            type: ERROR_MSG,
            payload: err.response.data
        })
    })
}

export const setCurrentUser = decoded =>{
    return{
        type:SET_CURRENT_USER,
        payload: decoded
    }
}

export const registerUser = (userData, history) => {
    axios.post('/api/users/register', userData).then(res => {
        history.push('/login')
    }).catch(err => {
        dispatch({
            type: ERROR_MSG,
            payload: err.response.data
        })
    })
}