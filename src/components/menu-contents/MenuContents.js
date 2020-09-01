import React , {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './menu-contents.scss';

const MenuContents = [
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
        id: 2,
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
class Menu_Contents extends Component{
    render(){
        return(
            MenuContents.map(Menu_Content=> {
                return(
                  <div  key={Menu_Content.id} className="menu-contents-list">
                  <FontAwesomeIcon className="menu-contents-list-icon"  icon={Menu_Content.icons} /> <p>{Menu_Content.content}</p>
                  </div>
                )
            } )
        )
          
    }
}
export default Menu_Contents;