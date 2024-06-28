import React from 'react';
import './AuthPage.css';
import ImageSlider from '../ImageSlider/ImageSlider';

const facebook = "../../src/assets/images/NMfacebook.svg";
const google = "../../src/assets/images/NMgoogle.svg";
const apple = "../../src/assets/images/NMapple.svg";
const Back ='../.././src/assets/images/NMBack.svg'
import ImageLogo from '../../assets/images/NMGroup.svg'

const AuthPage = ({ FormComponent, isSignUp, isAddPayment }) => {
  return (
    <div className={`NM_AuthPage ${isSignUp || isAddPayment ? 'signup' : 'login'}`}>
      <div className={`NM_FormContainer ${isSignUp || isAddPayment ? 'signup' : 'login'}`}>
          <img src={ImageLogo} alt="logo" />
          <FormComponent facebook={facebook} google={google} apple={apple} Back={Back}/>
      </div>
      <div className={`NM_ImageContainer ${isSignUp || isAddPayment ? 'signup' : 'login'}`}>
          <ImageSlider />
      </div>
    </div>
  );
};

export default AuthPage;

