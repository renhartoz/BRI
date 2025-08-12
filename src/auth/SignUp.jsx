import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Container, CircularProgress, Stack } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getCSRFToken } from '../services/utils';

const SignUp = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (password !== confirm_password) {
            setError(['Passwords do not match']);
            return;
        }

        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('first_name', first_name);
        formData.append('last_name', last_name);
        formData.append('password', password);

        try {
            const res = await axios.post('/user/signup/', formData, {
                baseURL: import.meta.env.VITE_API_BASE_URL,
                withCredentials: true,
                headers: {
                    'X-CSRFToken': getCSRFToken(),
                    'Content-Type': 'multipart/form-data',
                },
            });
        
            setSuccess('Account created. Please check your email to verify your account.');
            
            setTimeout(() => {
                navigate('/login');
            }, 5000);

        } catch (err) {
            console.log(err)
            const data = err.response?.data || {};
            const messages = [];
    
            for (const key in data) {
                if (Array.isArray(data[key])) {
                    messages.push(...data[key]);
                } else if (typeof data[key] === 'string') {
                    messages.push(data[key]);
                }
            }
            setSuccess(null);
            setError(messages.length ? messages : ['Sign up failed']);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="xs">
            <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {error && (
                    <Box px={2} py={1} bgcolor="error.light" border={'1px solid'} borderColor={'error.main'} mb={2}>
                        {error.map((err, index) => (
                        <Typography key={index} color="#fff">{err}</Typography>
                        ))}
                    </Box>
                    )}
                    {success && (
                    <Box px={2} py={1} bgcolor="success.light" border={'1px solid'} borderColor={'success.main'} mb={2}>
                        <Typography color="#fff">{success}</Typography>
                    </Box>
                    )}
                    <Typography component="h1" variant="h5">Sign Up</Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <TextField label="Username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} margin="normal" fullWidth required />
                    <TextField label="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} margin="normal" fullWidth required />
                    <TextField label="First Name" name="first_name" value={first_name} onChange={(e) => setFirstName(e.target.value)} margin="normal" fullWidth />
                    <TextField label="Last Name" name="last_name" value={last_name} onChange={(e) => setLastName(e.target.value)} margin="normal" fullWidth />
                    <TextField label="Password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} margin="normal" fullWidth required />
                    <TextField label="Confirm Password" name="confirm_password" type="password" value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} margin="normal" fullWidth required />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                        disabled={loading}
                        endIcon={loading && <CircularProgress size={20} color="inherit" />}
                    >
                        {loading ? 'Creating...' : 'Sign Up'}
                    </Button>
                </Box>
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Typography variant="body2" color="text.secondary">
                        Already have an account? <Link to="/login">Login</Link>
                    </Typography>
                </Stack>
            </Box>
        </Container>
    );
};

export default SignUp;
