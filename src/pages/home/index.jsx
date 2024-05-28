import React from 'react';
import Header from '../../components/Header/index';
import Sidebar from '../../components/Sidebar/index';
// import SidebarIcon from '../../components/Sidebar/SidebarIcon/index';
import BackgroundWelcome from '../../components/BackgroundWelcome/index';

import './home.css'

function HomePage() {
    return (
        <>
            <Header />
            {/* <Sidebar/> */}
            <BackgroundWelcome/>
        </>
    )
}

export default HomePage;