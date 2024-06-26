import React from 'react';
import AuthPage from '../../Components/AuthPage/AuthPage';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';

const SignUp = () => {
    return <AuthPage FormComponent={SignUpForm} isSignUp={true} />;
};

export default SignUp;
