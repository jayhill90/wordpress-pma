import React, { Component } from 'react';
import logo from './logo.svg';
import WPHeader from './WPHeader'
import Menu from './Menu'
import SinglePage from './SinglePage';
import Posts from './Posts'
import Footer from './Footer'
import Main from './Main'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import './App.css';

class App extends Component {

constructor(props){
  super(props);

  this.state = {
    id: '',
    content: [],
  };
}
  // Component has mounted


  render() {
    return (
      // Router. See Main.js for more code. 
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
  }
}

export default App;