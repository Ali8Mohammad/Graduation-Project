import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '../SignUpForm/SignUpForm.css';
import '../AuthPage/AuthPage.css'
import './VerifyCodeForm.css'
import '../ForgotPasswordForm/ForgotPasswordForm.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link ,useNavigate} from 'react-router-dom';

export default function VerifyCodeForm({Back}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& label.Mui-focused': {
              color: '#FF8500',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#FF8500',
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#FF8500',
              },
            },
          },
        },
      }
    },
  });
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/auth/new_password');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='NM_SignUpF'>
         <Link className="NM_Back" to={"/auth/login"} rel="noopener noreferrer">
         <img src={Back} alt="<" />
         <p>Back to login</p>
       </Link>
        <h2>Verify code</h2>
        <p className='NM_ParaLog'>
        An authentication code has been sent to your email.
        </p>
        <form>
          <div className='NM_FormLogin'>
            <Box sx={{ width: '100%', height: '56px' }}>
              <TextField
                id="outlined-required"
                type={showPassword ? 'text' : 'password'}
                label="Enter Code"
                defaultValue="7789BM6X"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </div>
          <div className='NM_LoginLink ForCode'>
          <p>
          Didn’t receive a code?
             <a href="#">Resend</a>
          </p>
        </div>
          <input type="submit" value="Verify" className='NM_Submit ForCode'  onClick={handleSubmit}/>
        </form>
      </div>
    </ThemeProvider>
  );
}