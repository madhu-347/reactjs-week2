import React , { Component } from 'react';
import './components/FontawesomeIcons';
import Header from './components/header-panel/Header';
import MenuBarPanel from './components/menu-bar-panel/MenuBarPanel';
import DisplayPanel from './components/display-panel/DisplayPanel';




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
 
