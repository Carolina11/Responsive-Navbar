/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Circle from 'components/circle';


import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

    <div><Link to="/About"> About </Link></div><div className="circle"></div>

  <div className="navBar">Site name</div>
      </div>


    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
