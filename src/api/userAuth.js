import axios from 'axios';
import { resolve } from './apiConfig/resolver';
import { backendHost, backendPort } from './apiConfig/backendConfig';

export async function register(first_name, last_name, email, password) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/users/register',
            data: { first_name, last_name, email, password },
        }));
}

export async function login(email, password) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/users/login',
            data: { email, password },
        }));
}

export async function changePassword(email, password) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/users/changePassword',
            data: { email, password },
            headers: { 'Authorization': 'Bearer ' + window.localStorage.token }
        }));
}