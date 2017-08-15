/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

import './style.css';
import './styleM.css';

export default class About extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

        <Link to="/">Home</Link>
      </div>
    );
  }
}

About.contextTypes = {
  router: React.PropTypes.object
};
