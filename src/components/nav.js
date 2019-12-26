import React from 'react';
import Menu from '../styled-components/styledMenu';
import themeToggler from '../images/sun.svg';

const Nav = ({menu, toggleTheme}) => (
    <Menu>
        {menu.map(menuItem => 
        <li>
            <a href={menuItem.href}>{menuItem.children}</a>
        </li>
        )}
        <li onClick={toggleTheme}><img src={themeToggler} alt=""/></li>
    </Menu>
)

export default Nav;

