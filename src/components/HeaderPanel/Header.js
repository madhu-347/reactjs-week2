import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './header.scss';
const Header = () => {
    return(
        <div className=" header-panel">
             
             <FontAwesomeIcon className="left-arrow" icon="arrow-left" /> <p className="dashboard-css">Dashboard</p>
             <FontAwesomeIcon className="right-angle" icon="angle-right" /> 
             <p className="social-feed-css"><strong>Social Feed</strong></p>
             <button className="button-menu" ><FontAwesomeIcon className="bars-menu" icon="bars" /></button>
            
        </div>
    )
}
export default Header;