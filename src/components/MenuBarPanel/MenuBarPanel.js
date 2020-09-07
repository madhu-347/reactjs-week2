import React from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './menu-bar-panel.scss';
import MenuContents from '../MenuContents/MenuContents';
const Menucontent = [
    {
        id: 0,
        icons : 'file-alt',
        content: 'Buzz home'

    },
    {
        id: 1,
        icons : 'file-alt',
        content:'My Buzz Posts'

    },
    {
        id : 2,
        icons : 'edit',
        content:'Draft Posts'
    
    },
    {
        id: 3,
        icons : 'user-plus',
        content:'My Followers'
    
    },
    {
        id: 4,
        icons : 'user-check',
        content:'I am Following'
        
    },
    {
        id: 5,
        icons : 'users',
        content:'My Teams'
    
    },
    {
        id: 6,
        icons : 'address-card',
        content:'My Reportees'
    
    }
]
const Menucontents2 =[
    {
      id:0,
      icons: 'file-upload',
      content:'New Artefacts'
    },
    {
        id:1,
        icons: 'file',
        content:'  New Modules'
      },
      {
        id:2,
        icons: 'brain',
        content:'  New Skills'
      }
]

const MenuBarPanel = () => {
    return(
        <div className="menu-bar-panel">
            <div className="name-plate">
            <ProfilePicture />
                <h5><strong>Madhumitha</strong></h5>
        </div>

        <div className="menu-contents">
           <MenuContents items={Menucontent} /> 
           <p className="see-more">See More <FontAwesomeIcon icon="angle-down" /></p>
        </div>

        <div className="menu-contents">
            <h5><strong>Recently added:</strong></h5>
            <MenuContents items={Menucontents2} /> 
            
            <p className="see-more">See More <FontAwesomeIcon icon="angle-down" /></p>
        </div>

           
        </div>
    )
}
export default MenuBarPanel;

