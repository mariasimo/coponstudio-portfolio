import React from 'react';
import Nav from './nav';
import Intro from './intro';
import StyledHero from '../styled-components/styledHero';

const Hero = ({ menu, intro, toggleTheme, theme }) => (
  <StyledHero>
    <div className='container'>
      <Intro intro={intro}></Intro>
      <Nav menu={menu} toggleTheme={toggleTheme} theme={theme}></Nav>
    </div>
  </StyledHero>
);

export default Hero;
