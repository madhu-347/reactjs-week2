import React , {Component} from 'react';
import profile from '../../assests/images/profile.png';
import './profile-picture.scss';

 class ProfilePicture extends Component{
     render(){
         return(
         <img alt="profile" className="image"src={profile}/>
        )
    }
}
export default ProfilePicture;