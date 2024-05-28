import React, { useEffect } from 'react';
import BackgroundImage from '../assets/background-welcome.jpg';

import './backgroundWelcome.css';

function BackgroundWelcome() {

    return (
        <div>
            <img src={BackgroundImage} className='background-image' alt='background-image'/>
        </div>
    );
}


export default BackgroundWelcome;