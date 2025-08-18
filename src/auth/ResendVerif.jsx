// src/pages/ResendVerif.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Stack, Button, TextField, Box, Typography, Container, Paper, InputAdornment, CircularProgress } from '@mui/material';
import { Person } from '@mui/icons-material';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getCSRFToken } from '../services/utils';

export default function ResendVerif() {
    const [identifier, setIdentifier] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    useEffect(()=>{
        setIdentifier(searchParams.get('email') || '');
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('identifier', identifier);

        try {
            const res = await axios.post('/user/resend-verification/', formData, { 
                baseURL: import.meta.env.VITE_API_BASE_URL,
                withCredentials: true,
                headers: {
                    "X-CSRFToken": getCSRFToken(),
                    "Content-Type": "multipart/form-data",
                }, 
            });
            setMessage(res.data.message || 'Verification email sent.');
            setTimeout(() => {
                navigate('/login');
            }, 3000);
        } catch (err) {
            setMessage(err.response?.data?.error || err.response?.data?.message || 'Failed to resend verification email.');
            setLoading(false);
        }
    };

    return (
        <Stack justifyContent="center" alignItems="center" minHeight="100vh" sx={{ backgroundColor: '#f0f0f0', backgroundImage: 'linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(to right, #444cf7 1px, #f0f0f0 1px);', backgroundSize:'10vh 10vh' }}>
            <Container maxWidth="sm">
                <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} minHeight={'100vh'} py={4}>
                    {message && (
                        <Box px={2} py={1} bgcolor="secondary.light" border={'1px solid'} borderColor={'secondary.main'} mb={2}>
                            <Typography color="#fff">{message}</Typography>
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
                            <Typography component="h1" variant="h5" color='#fff' fontWeight={'bold'}>Resend Verification Email</Typography>
                        </Box>
                        <Stack component={"form"} onSubmit={handleSubmit} gap={3} sx={{ p: 4 }}>
                            <TextField placeholder="Username/Email" value={identifier} onChange={(e) => setIdentifier(e.target.value)} fullWidth required
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
                                        Resending...
                                    </>
                                ) : (
                                    'Resend'
                                )}
                            </Button>
                        </Stack>
                    </Paper>
                </Stack>
            </Container>
        </Stack>
    );
}
