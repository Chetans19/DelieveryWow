import React from 'react';
import './SidebarToggle.css'

const sidebarToggle = props => (
    <div className="toggle-button" onClick={props.click}>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
    </div>
)

export default sidebarToggle;