import React from 'react';
import Menu from '../styled-components/styledMenu';

const Nav = ({menu, toggleTheme}) => (
    <Menu>
        {menu.map(menuItem => 
        <li key={menuItem.id}>
            <a href={menuItem.href}>{menuItem.children}</a>
        </li>
        )}
        <li onClick={toggleTheme} className="theme-toggler">☼</li>
    </Menu>
)

export default Nav;

