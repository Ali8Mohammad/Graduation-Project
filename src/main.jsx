import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    useLocation
} from 'react-router-dom';
import './index.css';
import './Components/Nav/Nav.css';
import App from './App.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import FlightFlow from './Pages/Flight Flow/FlightFlow.jsx';
import HotelFlow from './Pages/Hotel Flow/HotelFlow.jsx';
import FlightsSearch from './Pages/Flight Flow/FlightsSearch/FlightsSearch.jsx';
import FlightListing from './Pages/Flight Flow/FlightListing/FlightListing.jsx';
import FlightDetail from './Pages/Flight Flow/FlightDetail/FlightDetail.jsx';
import FlightBooking from './Pages/Flight Flow/FlightBooking/FlightBooking.jsx';
import HotelSearch from './Pages/Hotel Flow/HotelSearch/HotelSearch.jsx';
import HotelListing from './Pages/Hotel Flow/HotelListing/HotelListing.jsx';
import HotelDetail from './Pages/Hotel Flow/HotelDetail/HotelDetail.jsx';
import HotelBooking from './Pages/Hotel Flow/HotelBooking/HotelBooking.jsx';
import Favorites from './Pages/Hotel Flow/Favorites/Favorites.jsx';
import AccountFlow from './Pages/Account Flow/AccountFlow.jsx';
import MyAccount from './Pages/Account Flow/MyAccount/MyAccount.jsx';
import FlightBooking2 from './Pages/Flight Flow/FlightBooking2/FlightBooking2.jsx';
import FlightBooking3 from './Pages/Flight Flow/FlightBooking3/FlightBooking3.jsx';
import HotelBookingpage4 from './Pages/Hotel Flow/Hotel-Booking-page4/HotelBookingpage4.jsx';
import Authenticate from './Pages/Auth/Authenticate.jsx';
import Login from './Pages/Auth/Login.jsx';
import SignUp from './Pages/Auth/SignUp.jsx';
import NewPassword from './Pages/Auth/NewPassword.jsx';
import ForgetPassword from './Pages/Auth/ForgetPassword.jsx';
import AddPayment from './Pages/Auth/AddPayment.jsx';
import VerifyCode from './Pages/Auth/VerifyCode.jsx';
import favourite from './assets/images/favourites.svg';
import client from './assets/images/Client-1.png';
import arrow from './assets/images/Arrow_Down.svg'
import HotelBooking2 from './Pages/Hotel Flow/Hotel-Booking-page2/HotelBooking2.jsx';

const title = 'LIVE & TRAVEL';
const para = 'Special offers to suit your plan';
const className = 'NM_Hero'
const head2 = 'Helping Others';
const State = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [currentPage, setCurrentPage] = useState('landingpage');
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setCurrentPage('landingpage');
        } else {
            setCurrentPage('otherpage');
        }
    }, [location.pathname]);

    const toggleButtons = () => {
        setIsLoginActive(prevState => !prevState);
    };

    const NM_Login2 = isLoginActive ? 'NM_Login' : 'NM_Signup';
    const NM_Signup2 = isLoginActive ? 'NM_Signup' : 'NM_Login';
    const NM_LinkLog = isLoginActive ? 'NM_LinkLogin' : 'NM_LinkSignup';
    const NM_LinkSign = isLoginActive ? 'NM_LinkSignup' : 'NM_LinkLogin';


    const Navlinks = ({ type, className, linkTo, linkText, imgSrc, imgAlt, onClick, classNameLink, afterImage, arrowAlt, arrowclass, textClass, imgClass }) => {
        if (type === 'button') {
            return (
                <button className={className} onClick={onClick}>
                    <Link className={classNameLink} to={linkTo} rel="noopener noreferrer">
                        {linkText}
                    </Link>
                </button>
            );
        } else if (type === 'list') {
            return (
                <li className={className}>
                    <Link to={linkTo} onClick={onClick}>
                        {imgSrc && <img className={imgClass} src={imgSrc} alt={imgAlt} />}
                        {linkText && <span className={textClass}>{linkText}</span>}
                        {afterImage && <img className={arrowclass} src={afterImage} alt={arrowAlt} />}
                    </Link>
                </li>
            );
        } else {
            return null;
        }
    };

    const Navbuttons = ({ toggleButtons, favourite, client, showAccountButtons, isLandingPage }) => {
        return (
            <>
                {isLandingPage ? (
                    <>
                        <Navlinks
                            type="button"
                            className={NM_Login2}
                            linkTo="/auth/login"
                            linkText="Login"
                            onClick={toggleButtons}
                            classNameLink={NM_LinkLog}
                        />
                        <Navlinks
                            type="button"
                            className={NM_Signup2}
                            linkTo="/auth"
                            linkText="Sign up"
                            onClick={toggleButtons}
                            classNameLink={NM_LinkSign}
                        />
                    </>
                ) : null}
                {showAccountButtons && (
                    <>
                        <Navlinks
                            type="list"
                            className="AM_Link"
                            linkTo="/hotelflow/favorites"
                            imgSrc={favourite}
                            imgAlt="favourite"
                            linkText="Favourites"
                            textClass="AM_Favourite"
                            imgClass="FavouritesImg"
                        />
                        <span className='AM_dash'>|</span>
                        <Navlinks
                            type="list"
                            className="AM_Link"
                            linkTo="#"
                            imgSrc={client}
                            imgAlt="John D."
                            linkText="John D."
                            onClick={() => { }}
                            afterImage={arrow}
                            arrowAlt={"arrow"}
                            arrowclass={'arrowDown'}
                            textClass='AM_Client'
                            imgClass="ClientImg"
                        />
                    </>
                )}
            </>
        );
    };
    const navButtonsForMobile = (
        <>
            <li className={currentPage === 'landingpage' ? "" : 'd-none'}>
                <Link className='NM_Link' to="/auth/login" rel="noopener noreferrer"> Login
                </Link>
            </li>
            <li className={currentPage === 'landingpage' ? '' : 'd-none'}>
                <Link className='NM_Link' to="/auth" rel="noopener noreferrer"> Sign Up
                </Link>
            </li>
            <li className={currentPage === 'landingpage' ? 'd-none' : ''}>
                <Link className='AM_Link' to="/hotelflow/favorites">
                <img src={favourite} alt="" />Favourites</Link>
            </li>
            <li className={currentPage === 'landingpage' ? 'd-none' : ''}>
                <Link className='AM_Link'>John D.</Link>
            </li>
            <li className={currentPage === 'landingpage' ? 'd-none' : 'user-profile'}>
            <img src={client} alt="" /></li>
        </>
    );


    const navButtons = (showAccountButtons, isLandingPage) => (
        <Navbuttons toggleButtons={toggleButtons} favourite={favourite} client={client} showAccountButtons={showAccountButtons} isLandingPage={isLandingPage} />
    );

    return (
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={
                        <LandingPage
                            head2 ={head2}
                            className={className}
                            title={title}
                            para={para}
                            navButtons={navButtons(false, true)}
                            navButtonsForMobile={navButtonsForMobile}
                        />
                    } />
                    <Route path="flightflow" element={<FlightFlow />}>
                        <Route index element={
                            <FlightsSearch
                                navButtons={navButtons(true, false)}
                                navButtonsForMobile={navButtonsForMobile}
                            />
                        } />
                        <Route path="listing" element={
                            <FlightListing
                                navButtons={navButtons(true, false)}
                                navButtonsForMobile={navButtonsForMobile}
                            />
                        } />
                        <Route path="detail" element={
                            <FlightDetail
                                navButtons={navButtons(true, false)}
                                navButtonsForMobile={navButtonsForMobile}
                            />
                        } />
                        <Route path="booking" element={
                            <FlightBooking
                                navButtons={navButtons(true, false)}
                                navButtonsForMobile={navButtonsForMobile}
                            />
                        } />
                    </Route>
                    <Route path="hotelflow" element={<HotelFlow />}>
                        <Route index element={<HotelSearch />} />
                        <Route path="listing" element={<HotelListing />} />
                        <Route path="detail" element={<HotelDetail />} />
                        <Route path="booking" element={<HotelBooking />} />
                        <Route path="favorites" element={<Favorites />} />
                    </Route>
                    <Route path="myaccount" element={<AccountFlow />}>
                        <Route index element={<MyAccount />} />
                    </Route>
                    <Route path="auth" element={<Authenticate />}>
                        <Route index element={<SignUp />} />
                        <Route path="login" element={<Login />} />
                        <Route path="new_password" element={<NewPassword />} />
                        <Route path="forget_password" element={<ForgetPassword />} />
                        <Route path="add_payment" element={<AddPayment />} />
                        <Route path="verify_code" element={<VerifyCode />} />
                    </Route>
                </Route>
            </Routes>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <State />
    </Router>
);
