import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './header.scss';
import MenuBarPanel from '../MenuBarPanel/MenuBarPanel';
class Header extends Component
{
    state ={menu: false};
   
   showMenu = ()=>  {
      this.setState({menu:!this.state.menu });
   }
    render(){
        return(
            <div className=" header-panel">
                 
                 <FontAwesomeIcon className="left-arrow" icon="arrow-left" /> <p className="dashboard-css">Dashboard</p>
                 <FontAwesomeIcon className="right-angle" icon="angle-right" /> 
                 <p className="social-feed-css"><strong>Social Feed</strong></p>
                 <button onClick = {this.showMenu}>
                 <li className="hidden-menu">
                     <FontAwesomeIcon className="bars-menu" icon="bars" />
                     {this.state.menu ? (
                     <div className="hidden-tab"><MenuBarPanel /></div>
                     ):(
                         <div></div>
                     )}
                     
                     </li>
                 </button>
                 
              </div>       
        )
    }
}
export default Header;