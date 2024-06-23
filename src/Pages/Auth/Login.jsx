import React from 'react';
import AuthPage from '../../Components/AuthPage/AuthPage';
import LoginForm from '../../Components/LoginForm/LoginForm';

const Login = () => {
    return <AuthPage FormComponent={LoginForm} />;
};

export default Login;
