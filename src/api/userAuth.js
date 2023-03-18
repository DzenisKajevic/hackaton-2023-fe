import axios from 'axios';
import { resolve } from './apiConfig/resolver';
import { backendHost, backendPort } from './apiConfig/backendConfig';

export async function register(username, email, password) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/auth/register',
            data: { username, email, password },
        }));
}

export async function login(email, password) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/auth/changePassword',
            data: { email, password },
        }));
}

export async function changePassword(email, password) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/auth/changePassword',
            data: { email, password },
            headers: { 'Authorization': 'Bearer ' + window.localStorage.token }
        }));
}