import { createGlobalStyle } from 'styled-components';
import {colors, randomColor} from '../utils/Constants'


export const GlobalStyles = createGlobalStyle`

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  a.link{
    color: ${colors.blue};
  }

  a.hover-link{
    color: ${({ theme }) => theme.text};
    transition: color ease-in-out 0.3s;

    &:hover{
      color: ${randomColor}
    }
  }

  section {
    .container { padding: 2em 3em; }
  }
  
  nav {
    a{
      color: ${({ theme }) => theme.text};
    }
    
    .logo h1 a{
      color: ${randomColor}
    }
  }

  .fixed-menu{
    background-color: ${({ theme }) => theme.body};
  }

  .blue{color: ${colors.blue}}
  .gray{color: ${colors.gray}}
  .magenta{color: ${colors.magenta}}
  .gold{color: ${colors.gold}}
  .underline{text-decoration: underline}

}`