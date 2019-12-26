import React from 'react';
import Nav from './nav';
import Intro from './intro';
import StyledHero from '../styled-components/styledHero';

const Hero = ({ menu, intro, toggleTheme }) => (
  <StyledHero>
    <div className='container'>
      <Intro intro={intro}></Intro>
      <Nav menu={menu} toggleTheme={toggleTheme}></Nav>
    </div>
  </StyledHero>
);

export default Hero;
