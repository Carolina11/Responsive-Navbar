/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from 'react-router';
import Bars from 'react-icons/lib/fa/bars';

import './style.css';
import './styleM.css';

export default class NavBar extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      menuOpen: false
    }
  }

  handleMenu = () => {
    if(this.state.menuOpen === true)
    {
      this.setState({
        menuOpen: false
      })
    }
    else if(this.state.menuOpen === false)
    {
      this.setState({
        menuOpen: true
      })
    }
  }

  renderMenu(){
    if(this.state.menuOpen === true){
      return (
        <nav className="navMobile">
          <Link to = "/" className="navButton">Home</Link>
          <Link to = "/contact" className="navButton">Contact</Link>
          <a href="https://github.com/Technopathic" className="navButton">GitHub</a>
        </nav>
      )
    }
  }

  render() {
    return (
      <div>
        <div className="navBar">
          <div className="siteName">Site Name</div>
          <nav className="nav">
            <Link to="/" className="navButton">Home</Link>
            <Link to ="contact" className="navButton">Contact</Link>
            <a href="https://github.com/Technopathic" className="navButton">Github</a>
          </nav>
          <Bars className="menuIcon" onClick={this.handleMenu}/>
        </div>
        {this.renderMenu()}
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
};
