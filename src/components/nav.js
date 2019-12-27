import React from 'react';
import StyledNav from '../styled-components/styledMenu';

const Nav = ({menu, toggleTheme}) => (
    <StyledNav>
        {menu.map(menuItem => 
        <li key={menuItem.id}>
            <a href={menuItem.href}>{menuItem.children}</a>
        </li>
        )}
        <li onClick={toggleTheme} className="theme-toggler">☼</li>
    </StyledNav>
)

export default Nav;

