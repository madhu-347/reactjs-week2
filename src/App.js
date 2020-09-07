import React , { Component } from 'react';
import './components/FontawesomeIcons';
import Header from './components/HeaderPanel/Header';
import MenuBarPanel from './components/MenuBarPanel/MenuBarPanel';
import DisplayPanel from './components/DisplayPanel/DisplayPanel';




class App extends Component{
   render(){
     return( 
     <div>
        <Header />
        <div className="body-panel">
        <MenuBarPanel />
        <DisplayPanel />
        </div>
      </div>
    );
}
}
export default App;
 
