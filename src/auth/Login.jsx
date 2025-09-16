import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Box, Button, TextField, Typography, Container, CircularProgress, Stack, Paper, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, Person, Key } from '@mui/icons-material';
import axios from 'axios';
import { getCSRFToken } from '../services/utils';
import { setAccessToken } from '../services/token';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(false);

    const handleResend = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');
        setEmail(false);

        const formData = new FormData();
        formData.append('identifier', username);

        try {
            const res = await axios.post('/user/resend-verification/', formData, { 
                baseURL: import.meta.env.VITE_API_BASE_URL,
                withCredentials: true,
                headers: {
                    "X-CSRFToken": getCSRFToken(),
                    "Content-Type": "multipart/form-data",
                }, 
            });
            setMessage(['Verification email sent.']);
        } catch (err) {
            const data = err.response?.data || {};
            const messages = [];

            for (const key in data) {
                if (Array.isArray(data[key])) {
                    messages.push(...data[key]);
                } else if (typeof data[key] === 'string') {
                    messages.push(data[key]);
                }
            }
            setError(messages.length ? messages : ['Failed to resend verification email.']);
            setLoading(false);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');
        setEmail(false);

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        try {
            const res = await axios.post('/user/login/', formData, {
                baseURL: import.meta.env.VITE_API_BASE_URL,
                withCredentials: true,
                headers: {
                    "X-CSRFToken": getCSRFToken(),
                    "Content-Type": "multipart/form-data",
                },
            });

            setAccessToken(res.data.access);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            
            setError(null);
            navigate('/');
        } catch (err) {
            const data = err.response?.data || {};
            const messages = [];

            for (const key in data) {
                if (Array.isArray(data[key])) {
                    messages.push(...data[key]);
                } else if (typeof data[key] === 'string') {
                    messages.push(data[key]);
                }
            }
            setError(messages.length ? messages : ['Login failed.']);
            if (err.response.status === 403) setEmail(true); 
        } finally {
            setLoading(false);
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    return (
        <Box sx={{ backgroundColor: '#f0f0f0', backgroundImage: 'linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(to right, #444cf7 1px, #f0f0f0 1px);', backgroundSize:'10vh 10vh' }}>
            <Container maxWidth="sm">
                <Stack minHeight={'100vh'} justifyContent="center" alignItems="center" py={4}>
                    {error && (
                        <Box px={2} py={1} bgcolor="error.light" border={'1px solid'} borderColor={'error.main'} mb={2}>
                            {error.map((err, index) => (
                                <Typography key={index} color="#fff">{err}</Typography>
                            ))}
                        </Box>
                    )}
                    {message && (
                        <Box px={2} py={1} bgcolor="secondary.light" border={'1px solid'} borderColor={'secondary.main'} mb={2}>
                            {message.map((msg, index) => (
                                <Typography key={index} color="#fff">{msg}</Typography>
                            ))}
                        </Box>
                    )}
                    {email && (
                        <Box component={Button} sx={{textTransform:'none'}} px={2} py={1} bgcolor="#00f" border={'1px solid'} borderColor={'#007'} mb={2} onClick={handleResend}>
                            <Typography color="#fff">
                                Click here to send the Email Verification
                            </Typography>
                        </Box>
                    )}
                    <Paper elevation={3} sx={{ width: '100%', maxWidth: 400, borderRadius: 2, overflow: 'hidden'}}>
                        <Box
                            sx={{
                                background: 'linear-gradient(135deg, #2196f3, #21cbf3)',
                                p: 2,
                                textAlign: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h5" color='#fff' fontWeight={'bold'}>Welcome Back</Typography>
                        </Box>
                        <Stack direction={'column'} gap={4} sx={{ p: 4 }}>
                            <Stack component="form" onSubmit={handleSubmit} gap={2}>
                                <TextField placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth required
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Person />
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                    sx={{
                                        input: {
                                            '::placeholder': {
                                                color: '#888',
                                                fontWeight: 600,
                                                opacity: 1,
                                            },
                                        },
                                        '&:hover .MuiInputAdornment-root': {
                                            color: '#000'
                                        },
                                        '& .Mui-focused .MuiInputAdornment-root': {
                                            color: 'primary.main'
                                        },
                                    }}
                                />
                                <TextField placeholder="Password" type={showPassword?"text":"password"} value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required 
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Key />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        },
                                    }}
                                    sx={{
                                        input: {
                                            '::placeholder': {
                                                color: '#888',
                                                fontWeight: 600,
                                                opacity: 1,
                                            },
                                        },
                                        '&:hover .MuiInputAdornment-root, &:hover .MuiInputAdornment-root button' : {
                                            color: '#000'
                                        },
                                        '& .Mui-focused .MuiInputAdornment-root, .Mui-focused .MuiInputAdornment-root button': {
                                            color: 'primary.main'
                                        },
                                    }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    disabled={loading}
                                    sx={{
                                        py: 1.5,
                                        background: 'linear-gradient(135deg, #2196f3, #21cbf3)',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #1976d2, #00bcd4)',
                                        },
                                    }}
                                >
                                    {loading ? (
                                        <>
                                            <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                                            Signing In...
                                        </>
                                    ) : (
                                        'Sign In'
                                    )}
                                </Button>
                            </Stack>
                            <Box textAlign="center">
                                <Typography variant="body2" color="text.secondary">
                                    Don't have an account?{' '}
                                    <Link
                                        to="/signup"
                                        style={{
                                        color: '#2196f3',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        }}
                                    >
                                        Sign Up
                                    </Link>
                                </Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Stack>
            </Container>
        </Box>
    );
};

export default Login;
