import React from 'react';
import './Sidebar.css'
import SigInform from '../Form/Signin'
const sidebar = props => (
    <nav className="sidebar">
        <ul>
            <li> <label> SignIn <SigInform/> </label> </li>
            <li><a href="/">Orders</a></li>
            <li><a href="/">History</a></li>
            <li><a href="/">Settings</a></li>
            <li><a href="/">SignOut</a></li>
        </ul>
    </nav>
)

export default sidebar;