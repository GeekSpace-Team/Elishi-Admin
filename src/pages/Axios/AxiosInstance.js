import axios from "axios";

export const BASE_URL = "https://api.elishi.art/api/admin/";
const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('my_token')}`
    }
})

const AxiosInstanceFormData = axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('my_token')}`,
        'Content-Type': 'multipart/form-data'
    }
})

export const server_ip = "https://api.elishi.art";
export {AxiosInstance};
export {AxiosInstanceFormData};