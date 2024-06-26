import React from 'react'
import AuthPage from '../../Components/AuthPage/AuthPage'
import VerifyCodeForm from '../../Components/VerifyCodeForm/VerifyCodeForm'


const VerifyCode =()=>{
    return <AuthPage FormComponent= {VerifyCodeForm}/>
}
export default VerifyCode;