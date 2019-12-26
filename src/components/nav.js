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
        <li onClick={toggleTheme} className="theme-toggler">☼</li>
    </Menu>
)

export default Nav;

