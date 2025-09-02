import axios from 'axios';
import { getCSRFToken } from './utils';
import { getAccessToken, setAccessToken, clearAccessToken, restoreSession } from './token';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRFToken': getCSRFToken()   
    },
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            restoreSession();
            const token = getAccessToken();
            if (!token) window.location.href = '/login';
            originalRequest.headers['Authorization'] = `Bearer ${token}`; 
        }
        return Promise.reject(error);
    }
);


export default api;
