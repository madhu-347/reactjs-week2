import React , {Component} from 'react';
import './paragraph.scss';
import ProfilePicture from '../ProfilePicture/ProfilePicture';




class ParaGraph extends Component{
    createTasks(buzz,key) {
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
      render() {
        var BuzzEntries = this.props.entries;
        var BuzzContent = BuzzEntries.map(this.createTasks)
     
        return (
            <div>{BuzzContent}</div>
        );
      }
}
export default ParaGraph;