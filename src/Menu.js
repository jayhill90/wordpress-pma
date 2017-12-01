import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import SinglePage from './SinglePage'
class Menu extends Component {

  constructor(props){
    super(props);

    this.state = {
      menu: [],
    };
  }

  componentDidMount() {
    const url = "https://defc0re.wpengine.com/wp-json/wp-api-menus/v2/menus/2/"
    fetch(url)
    .then(results => {
      return results.json();
    }).then(data => {
        const menu = data.items.map(menu => menu)
        console.log(menu)
        this.setState({
          menu: menu,
        })
    });
  }

  buildLink(title) {
    if (title.toLowerCase() === 'home') {
      return '/';
      console.log(title)
    }
    else {
      return title.toLowerCase();
    }
  }


  render(){
    return(
      <div>
        {this.state.menu.map((menu, i) => (
          <div className="test" key={`${menu.title}-${i}`}>
              <div> <Link to={`${this.buildLink(menu.title)}`}>{menu.title}</Link></div>
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;
