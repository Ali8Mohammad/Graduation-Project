 import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css';
import FlightsSearch from './Pages/Flight Flow/FlightsSearch/FlightsSearch.jsx';
import FlightListing from './Pages/Flight Flow/FlightListing/FlightListing.jsx';
import FlightDetail from './Pages/Flight Flow/FlightDetail/FlightDetail.jsx';
import FlightBooking from './Pages/Flight Flow/FlightBooking/FlightBooking.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';

const title = 'LIVE & TRAVEL';
const para = 'Special offers to suit your plan';
const navButtons = (
    <>
        <button className='NM_Login'>Login</button>
        <button className='NM_Signup'>Sign up</button>
    </>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
          {
              path: "/",
              element: <LandingPage title={title} para={para} navButtons={navButtons} />,
          },
          {
              path: "/search",
              element: <FlightsSearch/>,
          },
          {
              path: "/listing",
              element: <FlightListing/>,
          },
          {
              path: "/detail",
              element: <FlightDetail/>,
          },
          {
              path: "/fightbooking",
              element: <FlightBooking/>,
          },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

