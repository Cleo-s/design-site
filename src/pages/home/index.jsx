import React from 'react';

import Sidebar from '../../components/Sidebar/index';
import Header from '../../components/Header/index';

import './home.css'
import SidebarIcon from '../../components/Sidebar/SidebarIcon/index';

function HomePage() {
    return (
        <div className='background-div'>
            <Header/>
            <Sidebar icon={<SidebarIcon/>}/>
        </div>
    )
}

export default HomePage;