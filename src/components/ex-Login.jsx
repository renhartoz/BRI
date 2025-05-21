import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  TextField, 
  Typography, 
  Container, 
  Paper, 
  InputAdornment,
  IconButton,
  Divider,
  useTheme
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Theme from './Theme';

// Neobrutalism styles
const styles = {
  paper: {
    p: 4,
    width: '100%',
    border: '2px solid #000',
    boxShadow: '8px 8px 0px #000',
    backgroundColor: '#fff',
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '0',
      border: '2px solid #000',
      backgroundColor: '#fff',
      '&:hover .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
  },
  button: {
    borderRadius: '0',
    border: '2px solid #000',
    boxShadow: '4px 4px 0px #000',
    textTransform: 'none',
    padding: '10px 24px',
    '&:hover': {
      boxShadow: '2px 2px 0px #000',
      transform: 'translate(2px, 2px)',
    },
    '&:active': {
      boxShadow: '0px 0px 0px #000',
      transform: 'translate(4px, 4px)',
    },
  },
};

const Login = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', formData);
  };

  return (
    <Theme>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Paper 
            elevation={0}
            sx={styles.paper}
          >
            <Typography component="h1" variant="h4" align="center" gutterBottom>
              Welcome Back
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" mb={4}>
              Sign in to continue to your account
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email or Username"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                sx={[styles.textField, { mb: 2 }]}
              />
              
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                sx={styles.textField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={[styles.button, {
                  mt: 3,
                  mb: 2,
                  py: 1.5,
                  fontSize: '1rem',
                }]}
              >
                Sign In
              </Button>
              
              <Divider sx={{ my: 3, borderColor: '#000' }}>
                <Typography variant="body2" sx={{ px: 1, backgroundColor: '#fff' }}>
                  OR
                </Typography>
              </Divider>
              
              <Button
                fullWidth
                variant="outlined"
                sx={[styles.button, {
                  mb: 2,
                  py: 1.5,
                  backgroundColor: '#fff',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }]}
              >
                Continue with Google
              </Button>
              
              <Box sx={{ textAlign: 'center', mt: 2 }}>
                <Typography variant="body2">
                  Don't have an account?{' '}
                  <Typography 
                    component="span" 
                    sx={{ 
                      color: 'primary.main',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      '&:hover': {
                        color: 'primary.dark',
                      },
                    }}
                  >
                    Sign up
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Theme>
  );
};

export default Login;