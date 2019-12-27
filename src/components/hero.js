import React from 'react';
import Nav from './nav';
import Intro from './intro';
import StyledHero from '../styled-components/styledHero';

const Hero = (props) => (
  <StyledHero>  
    <div className='container'>
      <Intro intro={props.intro}></Intro>
      <Nav {...props}></Nav>
    </div>
  </StyledHero>
);

export default Hero;
