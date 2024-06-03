import React from 'react';

import './sidebar.css';

function Sidebar({icon}) {
    return (
        <div className="sidebar-div">
            {icon}
            <nav className="sidebar-nav">
            </nav>
        </div>
    )
}

export default Sidebar; 