import React, { Component } from 'react';
import Posts from './Posts';
import SinglePage from './SinglePage';
import SinglePost from './SinglePost';
import {
  Route,
  Switch
} from 'react-router-dom'

class Content extends Component {
  component
  render(){
    return(
      <Switch>
        <Route path='/' exact component={Posts}/>
        <Route path='/:slug' params=':slug' component={SinglePage}/>
        <Route exact path='/blog/:id' params=':id' component={SinglePost}/>
      </Switch>

    );
  }
}

export default Content;
