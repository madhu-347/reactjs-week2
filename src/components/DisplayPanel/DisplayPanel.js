import React, { Component } from 'react';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './display-panel.scss';
import ParaGraph from '../Paragraph/Paragraph';
const moment = require("moment");
var m = moment();
 class DisplayPanel extends Component {
   data;
  constructor(props) {
        super(props);
        this.state = {
            items: []
          };
      }
      
      addBuzz = (value) => {
       
        if (this.inputContent.value !== "") {
            var newBuzz = {
              name: "Oslo",
              profile:"Managing Expert",
              text: this.inputContent.value,
              time: m.from(moment())
               
            };
         
            this.setState((prevState) => {
              return { 
                items: prevState.items.concat(newBuzz) 
              };
            });
           
            this.inputContent.value = "";
          }
          value.preventDefault();
          sessionStorage.setItem('content',JSON.stringify(this.state))
      };
      
     
      componentDidMount(){
        this.data = JSON.parse(sessionStorage.getItem('content'));
      
        
        if (sessionStorage.getItem('content')) {
          this.setState({
              items : this.data
      })
  } else {
      this.setState({
          items : []
      })
  }
}
       componentDidUpdate(){
        sessionStorage.setItem('content',JSON.stringify(this.state.items))
       }
      
     render(){
         return(
            <div className="display-panel">
            <div className="posting-panel width-component">
                <div className="posting-panel-line-right">
                    <ProfilePicture />
                </div>
                    
                <div className="posting-panel-line-left">
                <form onClick={this.addBuzz} >
                    <textarea  ref={(a) => this.inputContent = a}  placeholder="Share something here..."/>
                    <button className = "submit-button" type="submit" >Submit</button>
                    <div className="posting-panel-line2-left">
                      <span><FontAwesomeIcon icon="video" />  Any attachment</span>
                      <span><FontAwesomeIcon icon="camera" />  Capture it</span>
                      <span><FontAwesomeIcon icon="microphone" />  Say it</span>
                    </div>
                </form>
                    
                    
                </div>
            </div>
            <div className= "display-card">
              <ParaGraph entries={this.state.items} />
            </div>
            
              </div>
            
           
        )
     }
    
}
export default DisplayPanel;