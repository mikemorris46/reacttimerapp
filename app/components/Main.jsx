import React, { Component } from 'react';

import Navigation from 'Navigation';

const Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className="row">
        <div className="column medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Main;
