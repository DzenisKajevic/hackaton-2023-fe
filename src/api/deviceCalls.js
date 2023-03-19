import axios from 'axios';
import { resolve } from './apiConfig/resolver';
import { backendHost, backendPort } from './apiConfig/backendConfig';

export async function addDevice(deviceName, deviceType, ipAddress, macAddress) {
    if (deviceType === "thermostat") {
        return await resolve(
            axios({
                method: 'post',
                url: 'http://' + backendHost + ':' + backendPort + '/api/add-thermostat-device/register',
                data: { deviceName, deviceType, ipAddress, macAddress },
            }));
    }
    else if (deviceType === "light") {
        return await resolve(
            axios({
                method: 'post',
                url: 'http://' + backendHost + ':' + backendPort + '/api/add-light-device/register',
                data: { deviceName, deviceType, ipAddress, macAddress },
            }));
    }
    else if (deviceType === "lock") {
        return await resolve(
            axios({
                method: 'post',
                url: 'http://' + backendHost + ':' + backendPort + '/api/add-lock-device/register',
                data: { deviceName, deviceType, ipAddress, macAddress },
            }));
    }
}