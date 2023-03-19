import axios from 'axios';
import { resolve } from './apiConfig/resolver';
import { backendHost, backendPort } from './apiConfig/backendConfig';

export async function registerProfile(name, password) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/profiles/profileRegister',
            data: { name, password, admin: "false" },
            headers: { 'Authorization': 'Bearer ' + window.localStorage.token }
        }));
}

export async function loginToProfile(_id, password) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/profiles/profileLogin',
            data: { _id, password },
            headers: { 'Authorization': 'Bearer ' + window.localStorage.token }
        }));
}

export async function listProfiles() {
    return await resolve(
        axios({
            method: 'get',
            url: 'http://' + backendHost + ':' + backendPort + '/api/profiles/list-profiles',
            headers: { 'Authorization': 'Bearer ' + window.localStorage.token }
        }));
}

/*
export async function changeProfilePassword(profileName, password) {
    return await resolve(
        axios({
            method: 'post',
            url: 'http://' + backendHost + ':' + backendPort + '/api/profileAuth/changePassword',
            data: { email, password },
            headers: { 'Authorization': 'Bearer ' + window.localStorage.token }
        }));
}*/