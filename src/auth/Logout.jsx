import React, { useEffect } from "react";
import api from '../services/auth';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
            await api.post('/user/logout/');
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user');
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    useEffect(() => {
        handleLogout();
    }, []);
}