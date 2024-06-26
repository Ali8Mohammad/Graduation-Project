import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import flag from '../../assets/images/NMflag.svg';
import Omar from '../../assets/images/NMClient1.svg';
import Cristofer from '../../assets/images/NMClient2.svg';
import Kaiya from '../../assets/images/NMClient3.svg';
import Erin from '../../assets/images/NMClient4.svg';
import Terry from '../../assets/images/NMClient5.svg';
import '../HotalMap/HotalMap.css';
import './Reviews.css';
import { TextField, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';


const reviews = [
    {
        id: 1,
        img: Omar,
        valuation: '5.0 Amazing',
        name: 'Omar Siphron',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        alt: 'Omar',
    },
    {
        id: 2,
        img: Cristofer,
        valuation: '5.0 Amazing',
        name: 'Cristofer Ekstrom Bothman',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        alt: 'Cristofer',
    },
    {
        id: 3,
        img: Kaiya,
        valuation: '5.0 Amazing',
        name: 'Kaiya Lubin',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        alt: 'Kaiya',
    },
    {
        id: 4,
        img: Erin,
        valuation: '5.0 Amazing',
        name: 'Erin Septimus',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        alt: 'Erin',
    },
    {
        id: 5,
        img: Terry,
        valuation: '5.0 Amazing',
        name: 'Terry George',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        alt: 'Terry',
    },
    ...Array(35).fill(0).map((_, i) => ({ id: i + 6, img: Omar, valuation: '5.0 Amazing', name: `Reviewer ${i + 6}`, review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', alt: 'Reviewer' })),
];

const steps = Array.from({ length: 40 }, (_, index) => ({
    reviews: reviews.slice(index * 5, index * 5 + 5),
}));

// for style
const localTheme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& label.Mui-focused': {
                        color: '#FF8500',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: '#FF8500',
                    },
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: '#FF8500',
                        },
                    },
                },
            },
        },
    },
});
export default function Reviews() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    // for popup
    const [showPopup, setShowPopup] = useState(false);
    const handleLinkClick = (event) => {
        event.preventDefault();
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };
    return (
        <ThemeProvider theme={localTheme}>
            <Box sx={{ width: '100%' }}>
                <div className='NM_Reviews'>
                    <div className="NM_Line">
                        <h2>Reviews</h2>
                        <button className='NM_btn Review'>
                            <a onClick={handleLinkClick} href="#">Give your review</a>
                        </button>
                    </div>
                    <div className="NM_Line2">
                        <h4>4.2</h4>
                        <div className="NM_Col2">
                            <p className='NM_Para1'>Very good</p>
                            <p className='NM_Para2'>371 verified reviews</p>
                        </div>
                    </div>
                    <Box sx={{ maxWidth: '100%', width: '100%', flexGrow: 1 }}>
                        {steps[activeStep].reviews.map(review => (
                            <div key={review.id} className="NM_ItemReview">
                                <img className='NM_Person' src={review.img} alt={review.alt} />
                                <div className="NM_Box">
                                    <div className="NM_NameValuation">
                                        <p className='NM_Valuation'>{review.valuation}</p>
                                        <p className='NM_Name'>{review.name}</p>
                                    </div>
                                    <p className='NM_Message'>{review.review}</p>
                                </div>
                                <img className='NM_Flag' src={flag} alt="flag" />
                            </div>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '24px' }}>
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{ paddingY: 0, paddingX: '4px', color: 'var(--main-bgcolor)' }}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        </Button>
                        <Box sx={{ fontSize: '14px', fontWeight: '400px' }}>{`${activeStep + 1} of ${maxSteps}`}</Box>
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{ paddingY: 0, paddingX: '4px', color: 'var(--main-bgcolor)' }}>
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    </Box>
                </div>
                {showPopup && (
                    <div className="NM_Popup">
                        <div className="NM_Popup_Content">
                            <span className="NM_Close Review" onClick={handleClosePopup}>&times;</span>
                            <form>
                                <Box sx={{ width: '100%', height: 'auto' }}>
                                    <TextField
                                        id="outlined-required"
                                        label="Your Review"
                                        fullWidth
                                        multiline
                                        rows={5}
                                    />
                                </Box>

                                <input type="submit" value="Send" className='NM_Submit ForCode' onClick={handleClosePopup} />
                            </form>
                        </div>
                    </div>
                )}
            </Box>
        </ThemeProvider>
    );
}



