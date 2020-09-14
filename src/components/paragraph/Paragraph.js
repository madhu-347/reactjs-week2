import React , {Component} from 'react';
import './paragraph.scss';
import ProfilePicture from '../ProfilePicture/ProfilePicture';




class ParaGraph extends Component{
      render() {
        var BuzzEntries = this.props.entries.map((buzz,key) =>
        {
            return (
                <div  key={key}  className="post-content  width-component">
                <div className="post-info">
                    <div className="profile-image profile-border-color">
                        <ProfilePicture />
                    </div>
                    <div className="profile-name">
                        <h4>{buzz.name}</h4>
                        <h5>{buzz.profile}</h5>
                        <h6>{buzz.time}</h6>
                    </div>
                </div>
            
                <p className="post-para">{buzz.text}</p>
            </div>
            )
          } 
        )
       
        
     
        return (
            <div className = "buzz-entries">{BuzzEntries}</div>
        );
      }
}
export default ParaGraph;