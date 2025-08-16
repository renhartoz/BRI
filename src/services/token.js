let accessToken = null;

export const setAccessToken = (token) => {
    accessToken = token;
};

export const getAccessToken = () => accessToken;

export const clearAccessToken = () => {
    accessToken = null;
};

import axios from 'axios';
import { getCSRFToken } from './utils';
import { jwtDecode } from "jwt-decode";

export function isTokenExpired() {
    const token = getAccessToken();
    if (!token) return true;
    
    try {
        const { exp } = jwtDecode(token);
        if (!exp) return true;
        return Date.now() >= exp * 1000
    } catch {
        return true;
    }
}

export async function restoreSession() {
    if (accessToken && !isTokenExpired()) {
        return true;
    }

    try {
        const res = await axios.post(
            '/user/token/refresh/',
            {},
            {
                baseURL: import.meta.env.VITE_API_BASE_URL,
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCSRFToken(),
                }, 
                withCredentials: true 
            }
        );
        setAccessToken(res.data.access);
        return true;
    } catch {
        setAccessToken(null);
        return false;
    }
}