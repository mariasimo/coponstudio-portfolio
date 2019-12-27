import React from 'react';
import StyledNav from '../styled-components/styledMenu';
import { Link } from 'react-router-dom';


class Nav extends React.Component {

  fixingMenu = () => {
    const worksDomEl = document.querySelector('.works');
    const menuDomEl = document.querySelector('.main-menu');

    window.addEventListener('scroll', () => {
      const topOfWorks = worksDomEl.getBoundingClientRect().top;
      const pixelsScrolled = window.pageYOffset;
      const viewportHeight = window.innerHeight 

      if (topOfWorks < 150) {
        menuDomEl.classList.add('fixed-menu')
      } else {
        menuDomEl.classList.remove('fixed-menu')
      }

      if((pixelsScrolled > (worksDomEl.clientHeight + viewportHeight)*0.9) ) {
        menuDomEl.classList.contains('fixed-menu') && menuDomEl.classList.remove('fixed-menu');
      }
    });
  }

  componentDidMount() {
    this.fixingMenu();
  }

  render() {
    const { menu, theme, toggleTheme } = this.props;
    return (
      <StyledNav className='main-menu'>
        {menu.map(menuItem =>
          menuItem.logo ? (
            <li key={menuItem.id} className={'logo'}>
              <h1>
                <Link to={menuItem.href}>{menuItem.children}</Link>
              </h1>
            </li>
          ) : (
            <li key={menuItem.id}>
              <a href={menuItem.href} className={`hover-link`}>
                {menuItem.children}
              </a>
            </li>
          )
        )}
        <li className='theme-toggler' onClick={toggleTheme}>
          {theme === 'light' ? '☼' : '☽'}
        </li>
      </StyledNav>
    );
  }
}

export default Nav;
