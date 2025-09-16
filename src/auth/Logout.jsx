import React, { useEffect } from "react";
import api from '../services/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading'

export default function Logout() {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
            await api.post('/user/logout/');
            localStorage.removeItem('user');
            navigate('/login');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return (
        <Loading text={"Logging out"} />
    )
}