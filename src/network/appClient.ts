import axios from 'axios';
import useToken from '../store/useToken';

export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.response.use(response => {
    const token = response.headers['x-access-token'];
    if (token) {
        useToken.getState().setToken(token);
    }
    return response;
});
