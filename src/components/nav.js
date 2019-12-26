import React from 'react';

const Nav =  ({menu}) => (
    menu.map(menuItem => 
        <li>
            <a href={menuItem.href}>{menuItem.children}</a>
        </li>
    )
)

export default Nav;