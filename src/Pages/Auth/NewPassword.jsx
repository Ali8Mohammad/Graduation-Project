import React from 'react'
import AuthPage from '../../Components/AuthPage/AuthPage'
import NewPasswordForm from '../../Components/NewPasswordForm/NewPasswordForm'

const NewPassword =()=>{
    return <AuthPage FormComponent= {NewPasswordForm}/>
}
export default NewPassword;