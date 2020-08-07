import React from 'react';
import './Toolbar.css';
import SidebarToggle from '../Sidebar/SidebarToggle';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <SidebarToggle click={props.sidebarClickhandler} />
            </div>
            <div className="toolbar_logo"><a href="/">FoodApp</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li>
                        <button>
                        <a href="/">Cart</a>
                        </button>
                    </li>    
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;