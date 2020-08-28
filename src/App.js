import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello React first App!</h2><br/>
        <h2>React project deploy to GCP!!!</h2>
      </div>
    );
  }
}


export default App;
