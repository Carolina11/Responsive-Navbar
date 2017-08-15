/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import NavBar from 'components/NavBar';
import Circle from 'components/Circle';


import './style.css';
import './styleM.css';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <NavBar/>
        <Circle/>

      </div>
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
