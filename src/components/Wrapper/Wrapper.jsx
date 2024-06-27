import React from 'react';
import './Wrapper.css';

function Wrapper({ children, backgroundImage }) {
    const style = {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url(${backgroundImage})`,
    };

    return (
        <div className='NM_Wrapper' style={style}>
            <div className='NM_Cloud'></div>
            {children}
        </div>
    );
}

export default Wrapper;



