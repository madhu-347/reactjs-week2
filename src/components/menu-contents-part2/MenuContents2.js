import React , {Component} from 'react';
import './menu-contents2.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
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
 class MenuContents2 extends Component{
     render(){
         return(
            Menucontents2.map(MenuContent2=> {
                return(
                  <div  key={MenuContent2.id} className="menu-contents-list">
                  <FontAwesomeIcon className="menu-contents-list-icon"  icon={MenuContent2.icons} /> <p>{MenuContent2.content}</p>
                  </div>
                )
            } )
         )
     }
 }
 export default MenuContents2;