import React, { Component } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';
// import RenderToLayer from 'material-ui/internal/RenderToLayer';

//this is our entry point 


class App extends Component {
  render() {
    return (
     <div className="App">
        <UserForm />
    </div>
    );
  }
}


export default App;
