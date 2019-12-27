import styled from 'styled-components';

const Menu = styled.nav`
    display: flex;

    .theme-toggler {
        cursor: pointer;
    }

    .logo{
        display: none;
        h1 {  
            margin: 0;
            font-size: 1em;
        }
    }

    &.fixed-menu{
        position: fixed;
        width: 100% -3em;
        left: 3em;
        right: 3em;
        z-index: 999;

        .logo{
            display: flex;
        }
    }

    li{
        list-style-type: none;
        margin-right: 1em;
        font-size: 1.5em;
        
        a {
            text-decoration: none;
        }
    }
`


export default Menu;