import React , {Component} from 'react';
import './paragraph.scss';
import ProfilePicture from '../ProfilePicture/ProfilePicture';




class ParaGraph extends Component{
    createTasks(buzz) {
        return (
            <div  key={buzz.key}  className="post-content  width-component">
            <div className="post-info">
                <div className="profile-image profile-border-color">
                    <ProfilePicture />
                </div>
                <div className="profile-name">
                    <h4>Oslo</h4>
                    <h5>Magaging Expert</h5>
                    <h6>1d</h6>
                </div>
            </div>
        
            <p className="post-para">{buzz.text}</p>
        </div>
        )
      }
      render() {
        var BuzzEntries = this.props.entries;
        var BuzzContent = BuzzEntries.map(this.createTasks);
     
        return (
            <div>{BuzzContent}</div>
        );
      }
}
export default ParaGraph;