import React, { Component } from 'react';
import HomeBanner from '../components/home/HomeBanner';


class HomePage extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
         <HomeBanner></HomeBanner>
      </div>
    );
  }
}

export default HomePage;
