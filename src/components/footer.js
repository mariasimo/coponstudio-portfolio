import React from 'react';
import StyledFooter from '../styled-components/styledFooter';
import StyledNav from '../styled-components/styledMenu';

const Footer = ({socialMenu, contact, credits}) => (
  <StyledFooter>
    <div className='container'>
      <p className='contact'>{contact}</p>
      <div className='footerInfo'>
        <p className='credits'>{credits}</p>
        <StyledNav>
          {socialMenu.map(menuItem => (
            <li key={menuItem.id}> <a href={menuItem.href} target="_blank" className='hover-link' rel="noopener noreferrer">{menuItem.children}</a></li>
          ))}
        </StyledNav>
      </div>
    </div>
  </StyledFooter>
);

export default Footer;
