import React, { Component } from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './display-panel.scss';
import ParaGraph from '../Paragraph/Paragraph';


 class DisplayPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
          };
      }
       
      addBuzz = (value) => {
        if (this.inputContent.value !== "") {
            var newBuzz = {
              text: this.inputContent.value,
              key: Date.now()
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newBuzz) 
              };
            });
           
            this.inputContent.value = "";
          }
          value.preventDefault();
     
      }
     render(){
         return(
            <div className="display-panel">
            <div className="posting-panel width-component">
                <div className="posting-panel-line-right">
                    <ProfilePicture />
                </div>
                    
                <div className="posting-panel-line-left">
                <form onClick={this.addBuzz}>
                    <textarea  ref={(a) => this.inputContent = a}  placeholder="Share something here..."/>
                    <button type="submit" >Submit</button>
                    <div className="posting-panel-line2-left">
                      <span><FontAwesomeIcon icon="video" />  Any attachment</span>
                      <span><FontAwesomeIcon icon="camera" />  Capture it</span>
                      <span><FontAwesomeIcon icon="microphone" />  Say it</span>
                    </div>
                </form>
                    
                    
                </div>
            </div>
            <div className= "display-card">
            <div className="post-content  width-component">
                    <div className="post-info">
                        <div className="profile-image profile-border-color">
                            <ProfilePicture />
                        </div>
                        <div className="profile-name">
                            <h4>Oslo</h4>
                            <h5>Manager Expert</h5>
                            <h6>1d</h6>
                        </div>
                    </div>
                
                <p className="post-para"> Unlike with many sleep medications, with melatonin you are unlikely to become dependent, have a diminished response after repeated use (habituation), or experience a hangover effect</p>
                </div>
              <ParaGraph entries={this.state.items} />
              
            </div>
            
              </div>
            
           
        )
     }
    
}
export default DisplayPanel;