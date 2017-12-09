import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HomeIntro, HomeTitle, HomeMenu} from './Home';
import Foundation from 'react-foundation'

function IntroBox(props){
  return <h1>The Band Alexander</h1>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeTitle />
        <HomeMenu />
        <HomeIntro />
      </div>
    );
  }
}

export default App;
