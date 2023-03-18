import axios from 'axios';
import { resolve } from './apiConfig/resolver';
import { backendHost, backendPort } from './apiConfig/backendConfig';

export async function registerProfile(profileName, profilePassword) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/profileAuth/register',
            data: { username, email, password },
        }));
}

export async function loginToProfile(profileName, profilePassword) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/v1/profileAuth/login',
            data: { email, password },
        }));
}

export async function changeProfilePassword(profileName, password) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/profileAuth/changePassword',
            data: { email, password },
            headers: { 'Authorization': 'Bearer ' + window.localStorage.token }
        }));
}