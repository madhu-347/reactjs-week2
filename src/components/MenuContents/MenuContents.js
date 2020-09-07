import React ,{Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './menu-contents.scss';



  class MenuContents extends Component{
   render(){
           return(
               <div className="menu-contents">
                {this.props.items.map(item => (
                  <div  key={item.id} className="menu-contents-list">
                  <FontAwesomeIcon className="menu-contents-list-icon"  icon={item.icons} /> <p>{item.content}</p>
                  </div>  
                ))}
               </div> 
            );
        }
    
}

export default MenuContents;