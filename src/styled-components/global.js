import { createGlobalStyle } from 'styled-components';
import {colors} from '../utils/Constants'


export const GlobalStyles = createGlobalStyle`

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  section {
    .container { padding: 2em 3em; }
  }
  
  nav {
    a{
      color: ${({ theme }) => theme.text};
    }

    .theme-toggler {
      cursor: pointer;
    }
  }

  .blue{color: ${colors.blue}}
  .gray{color: ${colors.gray}}
  .magenta{color: ${colors.magenta}}
  .gold{color: ${colors.gold}}
  .underline{text-decoration: underline}

}`