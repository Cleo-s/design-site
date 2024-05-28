import React, { useEffect } from 'react';
import BackgroundImage from '../public/background-welcome.jpg';

import './backgroundWelcome.css';

function BackgroundWelcome() {
    useEffect(() => {
        console.log({ BackgroundImage });
    }, [])

    return (
        <div>
            <img src={BackgroundImage} className='background-image' alt='background-image'/>
        </div>
    );
}


export default BackgroundWelcome;