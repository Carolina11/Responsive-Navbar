/**
*
* Circle
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Circle extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="circleBox">
          <div className="circle">
            <div className="circleText">small</div>
          </div>
        </div>
      </div>
    );
  }
}

Circle.contextTypes = {
  router: React.PropTypes.object
};
