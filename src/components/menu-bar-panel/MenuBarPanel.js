import React, { Component } from 'react';
import ProfilePicture from '../profile-picture/ProfilePicture';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './menu-bar-panel.scss';
import MenuContents from '../menu-contents/MenuContents';
import MenuContents2 from '../menu-contents-part2/MenuContents2';

const MenuBarPanel = () => {
    return(
        <div className="menu-bar-panel">
            <div className="name-plate">
            <ProfilePicture />
                <h5><strong>Madhumitha</strong></h5>
        </div>

        <div className="menu-contents">
           <MenuContents />
            <p className="see-more">See More <FontAwesomeIcon icon="angle-down" /></p>
        </div>

        <div className="menu-contents">
            <h5><strong>Recently added:</strong></h5>
            <MenuContents2 />
            
            <p className="see-more">See More <FontAwesomeIcon icon="angle-down" /></p>
        </div>

           
        </div>
    )
}
export default MenuBarPanel;

