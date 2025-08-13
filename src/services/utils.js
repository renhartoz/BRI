export const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

export const getCSRFToken = () => {
    const token = getCookie('csrftoken');
    return token;
}

import { jwtDecode } from "jwt-decode";
export function isTokenExpired(token) {
    if (!token) return true;
    
    try {
        const { exp } = jwtDecode(token); // exp is in seconds
        if (!exp) return true;
        return Date.now() >= exp * 1000;
    } catch {
        return true;
    }
}

import axios from 'axios';
export const refreshAccessToken = async () => {
    try {
        const res = await axios.post(`/user/token/refresh/`, {}, {
            baseURL: import.meta.env.VITE_API_BASE_URL,
            headers: { 'X-CSRFToken': getCSRFToken() },
            withCredentials: true,
        });
        return res.data.access;
    } catch (err) {
        console.error("Refresh token expired or invalid", err);
        window.location.href = '/login';
        return null;
    }
};
