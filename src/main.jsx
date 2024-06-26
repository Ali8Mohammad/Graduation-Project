import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
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
import HotelBooking2 from './Pages/Hotel Flow/Hotel-Booking-page2/HotelBooking2.jsx';


const title = 'LIVE & TRAVEL';
const para = 'Special offers to suit your plan';
const head2 ='Helping Others';
const className ='NM_Hero'
const State = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const toggleButtons = () => {
        setIsLoginActive(prevState => !prevState);
    };
    const NM_Login2 = isLoginActive ? 'NM_Login' : 'NM_Signup';
    const NM_Signup2 = isLoginActive ? 'NM_Signup' : 'NM_Login';
    const NM_LinkLog = isLoginActive ? 'NM_LinkLogin' : 'NM_LinkSignup';
    const NM_LinkSign = isLoginActive ? 'NM_LinkSignup' : 'NM_LinkLogin';

    const navButtons = (
        <>
            <button className={NM_Login2} onClick={toggleButtons}>
            <Link className={NM_LinkLog} to={"auth/login"} rel="noopener noreferrer">Login
            </Link></button>
            <button className={NM_Signup2} onClick={toggleButtons}>
            <Link className={NM_LinkSign} to={"auth"}  rel="noopener noreferrer">Sign up
            </Link>
            </button>
        </>

    );
    const navButtonsForMobile = (
        <>
            <li>
                <Link className='NM_Link' to={"auth/login"} rel="noopener noreferrer"> Login
                </Link>
            </li>
            <li>
                <Link className='NM_Link' to={"auth"} rel="noopener noreferrer"> Sign Up
                </Link>
            </li>
        </>
    );

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <LandingPage head2={head2} title={title}
                        para={para} navButtons={navButtons} className={className}
                        navButtonsForMobile={navButtonsForMobile} />,
                },
                {
                    path: "flightflow",
                    element: <FlightFlow />,
                    children: [
                        {
                            path: "",
                            element: <FlightsSearch />,
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
                        {
                            path:"booking1",
                            element: <FlightBooking2/>
                        },
                        {
                            path:"booking2",
                            element: <FlightBooking3/>
                        }
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
                            path: "booking2",
                            element: <HotelBooking2/>,
                        },
                        {
                            path: "favorites",
                            element: <Favorites />,
                        },
                        {
                            path: "booking4",
                            element: <HotelBookingpage4 />,
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
