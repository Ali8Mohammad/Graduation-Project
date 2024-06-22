import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import './Components/Nav/Nav.css';
import App from './App.jsx';
import FlightsSearch from './Pages/Flight Flow/FlightsSearch/FlightsSearch.jsx';
import FlightListing from './Pages/Flight Flow/FlightListing/FlightListing.jsx';
import FlightDetail from './Pages/Flight Flow/FlightDetail/FlightDetail.jsx';
import FlightBooking from './Pages/Flight Flow/FlightBooking/FlightBooking.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import FlightFlow from './Pages/Flight Flow/FlightFlow.jsx';
import HotelFlow from './Pages/Hotel Flow/HotelFlow.jsx';
import HotelSearch from './Pages/Hotel Flow/HotelSearch/HotelSearch.jsx';
import HotelListing from './Pages/Hotel Flow/HotelListing/HotelListing.jsx';
import HotelDetail from './Pages/Hotel Flow/HotelDetail/HotelDetail.jsx';
import HotelBooking from './Pages/Hotel Flow/HotelBooking/HotelBooking.jsx';
import Favorites from './Pages/Hotel Flow/Favorites/Favorites.jsx';
import AccountFlow from './Pages/Account Flow/AccountFlow.jsx';
import MyAccount from './Pages/Account Flow/MyAccount/MyAccount.jsx';
import { Link } from 'react-router-dom';
import Authenticate from './Pages/Auth/Authenticate.jsx';
import Login from './Pages/Auth/Login.jsx';
import SignUp from './Pages/Auth/SignUp.jsx';
import NewPassword from './Pages/Auth/NewPassword.jsx';
import ForgetPassword from './Pages/Auth/ForgetPassword.jsx';
import AddPayment from './Pages/Auth/AddPayment.jsx';
import VerifyCode from './Pages/Auth/VerifyCode.jsx';
import favourite from './assets/images/favourites.svg';
import client from './assets/images/Client-1.png';
import arrow from './assets/images/Arrow_Down.svg';

const title = 'LIVE & TRAVEL';
const para = 'Special offers to suit your plan';

const State = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
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
                        {afterImage && <img className={arrowclass} src={afterImage} alt={arrowAlt}/>}
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
                            linkTo="/favorites"
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
                            onClick={() => {}}
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
            <li>
                <Link className='NM_Link' to="/auth/login" rel="noopener noreferrer"> Login
                </Link>
            </li>
            <li>
                <Link className='NM_Link' to="/auth" rel="noopener noreferrer"> Sign Up
                </Link>
            </li>
        </>
    );

    const navButtons = (showAccountButtons, isLandingPage) => (
        <Navbuttons toggleButtons={toggleButtons} favourite={favourite} client={client} showAccountButtons={showAccountButtons} isLandingPage={isLandingPage} />
    );

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: (
                        <LandingPage
                            title={title}
                            para={para}
                            navButtons={navButtons(false, true)}
                            navButtonsForMobile={navButtonsForMobile}
                        />
                    )
                },
                {
                    path: "flightflow",
                    element: <FlightFlow />,
                    children: [
                        {
                            path: "",
                            element: <FlightListing navButtons={navButtons(true, false)} />,
                        },
                        {
                            path: "listing",
                            element: <FlightListing />,
                        },
                        {
                            path: "detail",
                            element: <FlightDetail />,
                        },
                        {
                            path: "booking",
                            element: <FlightBooking />,
                        },
                    ]
                },
                {
                    path: "hotelflow",
                    element: <HotelFlow />,
                    children: [
                        {
                            path: "",
                            element: <HotelSearch />,
                        },
                        {
                            path: "listing",
                            element: <HotelListing />,
                        },
                        {
                            path: "detail",
                            element: <HotelDetail />,
                        },
                        {
                            path: "booking",
                            element: <HotelBooking />,
                        },
                        {
                            path: "favorites",
                            element: <Favorites />,
                        },
                    ]
                },
                {
                    path: "myaccount",
                    element: <AccountFlow />,
                    children: [
                        {
                            path: "",
                            element: <MyAccount />,
                        }
                    ]
                },
                {
                    path: "auth",
                    element: <Authenticate />,
                    children: [
                        {
                            path: "",
                            element: <SignUp />,
                        },
                        {
                            path: "login",
                            element: <Login />,
                        },
                        {
                            path: "new_password",
                            element: <NewPassword />,
                        },
                        {
                            path: "forget_password",
                            element: <ForgetPassword />,
                        },
                        {
                            path: "add_payment",
                            element: <AddPayment />,
                        },
                        {
                            path: "verify_code",
                            element: <VerifyCode />,
                        },
                    ]
                },
            ]
        },
    ]);

    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<State />);
