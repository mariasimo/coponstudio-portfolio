import React from 'react';
import StyledNav from '../styled-components/styledMenu';

class Nav extends React.Component {
  componentDidMount() {
    const worksDomEl = document.querySelector('.works');
    const menuDomEl = document.querySelector('.main-menu');

    window.addEventListener('scroll', () => {
      const topOfWorks = worksDomEl.getBoundingClientRect().top;
      const pixelsScrolled = window.pageYOffset;
      const viewportHeight = window.innerHeight 

      if (topOfWorks < 100) {
        console.log('holi');
        menuDomEl.classList.add('fixed-menu')
      } else {
        menuDomEl.classList.remove('fixed-menu')
      }

      if((pixelsScrolled > (worksDomEl.clientHeight + viewportHeight)*0.9) ) {
        menuDomEl.classList.contains('fixed-menu') && menuDomEl.classList.remove('fixed-menu');
      }
    });
  }

  render() {
    const { menu, toggleTheme } = this.props;
    return (
      <StyledNav className='main-menu'>
        {menu.map(menuItem =>
          menuItem.logo ? (
            <li key={menuItem.id} className={'logo'}>
              <h1>
                <a href={menuItem.href}>{menuItem.children}</a>
              </h1>
            </li>
          ) : (
            <li key={menuItem.id}>
              <a href={menuItem.href} className={'hover-link'}>
                {menuItem.children}
              </a>
            </li>
          )
        )}
        <li onClick={toggleTheme} className='theme-toggler'>
          ☼
        </li>
      </StyledNav>
    );
  }
}

export default Nav;
