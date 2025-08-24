import axios from 'axios';
import { getCSRFToken } from './utils';
import { getAccessToken, setAccessToken, clearAccessToken } from './token';

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
            const newToken = await refreshAccessToken();
            if (newToken) {
                setAccessToken(newToken);
                originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
                return api(originalRequest);
            } else {
                clearAccessToken();
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);


export default api;
