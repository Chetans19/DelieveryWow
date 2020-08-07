import React from 'react';
import './Sidebar.css'

const sidebar = props => (
    <nav className="sidebar">
        <ul>
            <li><a href="/">Orders</a></li>
            <li><a href="/">History</a></li>
            <li><a href="/">Settings</a></li>
            <li><a href="/">Logout</a></li>
        </ul>
    </nav>
)

export default sidebar;