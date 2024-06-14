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
import styles from './Components/Nav/Nav.module.css';

const title = 'LIVE & TRAVEL';
const para = 'Special offers to suit your plan';

const State = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const toggleButtons = () => {
        setIsLoginActive(prevState => !prevState);
    };
    const NM_Login2 = isLoginActive ? styles.NM_Login : styles.NM_Signup;
    const NM_Signup2 = isLoginActive ? styles.NM_Signup : styles.NM_Login;

    const navButtons = (
        <>
            <button className={NM_Login2} onClick={toggleButtons}>Login</button>
            <button className={NM_Signup2} onClick={toggleButtons}>Sign up</button>
        </>
    );

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: <LandingPage title={title}
                     para={para} navButtons={navButtons}/>,
                },
                {
                    path: "/flightflow",
                    element:<FlightFlow/>,
                    children: [
                        {
                            path: "/flightflow",
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
