import React from 'react';
import Hero from './hero';
import Works from './works';
import Footer from './footer'

const HomePage = (props) => console.log(props) || (
  <React.Fragment>
    <Hero {...props}></Hero>
    <Works {...props}></Works>
    <Footer {...props}></Footer>
  </React.Fragment>
);

export default HomePage;
