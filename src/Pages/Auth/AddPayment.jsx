import React from 'react';
import AuthPage from '../../Components/AuthPage/AuthPage';
import AddPaymentMethodForm from '../../Components/AddPaymentMethodForm/AddPaymentMethodForm';

const AddPayment = () => {
    return <AuthPage FormComponent={AddPaymentMethodForm} isAddPayment={true} />;
};

export default AddPayment;
