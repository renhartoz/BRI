import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Container, CircularProgress, Stack, Paper, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Person, Key, Email, LockReset, FirstPage, LastPage } from '@mui/icons-material';
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
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

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
            }, 3000);

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
        <Box sx={{ backgroundImage: 'repeating-linear-gradient( 45deg, #444cf7, #444cf7 5px, #e5e5f7 5px, #e5e5f7 60px );' }}>
            <Container maxWidth="xs">
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} minHeight={'100vh'} py={4}>
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
                    <Paper backgroundColor={'#f0f0f0'} borderRadius={2} boxShadow={3} elevation={3} sx={{ width: 600, overflow: 'hidden'}}>
                        <Box
                            sx={{
                                background: 'linear-gradient(135deg, #2196f3, #21cbf3)',
                                p: 2,
                                textAlign: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h5" color='#fff' fontWeight={'bold'}>Sign Up</Typography>
                        </Box>
                        <Stack direction={'column'} gap={4} sx={{ p: 4 }}>
                            <Stack component="form" onSubmit={handleSubmit} gap={2}>
                                <TextField placeholder="Username" name='nickname' value={username} onChange={(e) => setUsername(e.target.value)} fullWidth required
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
                                <TextField placeholder="Email" name='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Email />
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
                                <Stack direction={'row'} gap={2}>
                                    <TextField placeholder="First Name" name='given-name' value={first_name} onChange={(e) => setFirstName(e.target.value)} fullWidth required
                                        slotProps={{
                                            input: {
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <FirstPage />
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
                                    <TextField placeholder="Last Name" name='family-name' value={last_name} onChange={(e) => setLastName(e.target.value)} fullWidth required
                                        slotProps={{
                                            input: {
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <LastPage />
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
                                </Stack>
                                <TextField placeholder="Password" autoComplete='off' type={showPassword?"text":"password"} value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required 
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
                                <TextField placeholder="Confirm Password" autoComplete='off' type={showConfirmPassword?"text":"password"} value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} fullWidth required 
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockReset />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowConfirmPassword}
                                                        edge="end"
                                                    >
                                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
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
                                            Signing Up...
                                        </>
                                    ) : (
                                        'Sign In'
                                    )}
                                </Button>
                                <Box textAlign="center">
                                    <Typography variant="body2" color="text.secondary">
                                        Already have an account?{' '}
                                        <Link
                                            to="/login"
                                            style={{
                                            color: '#2196f3',
                                            textDecoration: 'none',
                                            fontWeight: 'bold',
                                            }}
                                        >
                                            Sign In
                                        </Link>
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Paper>
                </Stack>
            </Container>
        </Box>
    );
};

export default SignUp;
