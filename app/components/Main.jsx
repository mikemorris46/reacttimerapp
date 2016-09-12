import React, { Component } from 'react';

import Navigation from 'Navigation';

const Main = (props) => {
  return (
    <div>
      <Navigation />
      <p>Main Rendered</p>
      {props.children}
    </div>
  );
};

export default Main;
