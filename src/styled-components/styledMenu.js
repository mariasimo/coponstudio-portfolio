import styled from 'styled-components';

const Menu = styled.nav`
    display: flex;
    -webkit-animation-name: menuAnimBack;
    -webkit-animation-duration: 0.3s;
    animation-name: menuAnimBack;
    animation-duration: 0.3s;

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
        -webkit-animation-name: menuAnim; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 0.3s; /* Safari 4.0 - 8.0 */
        animation-name: menuAnim;
        animation-duration: 0.3s;

        .logo{
            display: flex;
            -webkit-animation-name: logoAnim;
            -webkit-animation-duration: 0.3s;
            animation-name: logoAnim;
            animation-duration: 0.3s;
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

    @keyframes menuAnim {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0)
            opacity: 1;
        }
    }

    @keyframes menuAnimBack {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0)
            opacity: 1;
        }
    }

    @keyframes logoAnim {
        from {
            transform: translate(-40px,10px);
            opacity: 0;
        }
        to {
            transform: translateX(0, 0px);
            opacity: 1;
        }
    }
`


export default Menu;