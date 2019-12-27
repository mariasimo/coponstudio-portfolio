import styled from 'styled-components';

const Menu = styled.nav`
    display: flex;
    -webkit-animation-name: menuAnimBack;
    -webkit-animation-duration: 0.5s;
    animation-name: menuAnimBack;
    animation-duration: 0.5s;

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
        top: 0;
        padding: 1rem 3rem;
        left: 0;
        right: 0;
        border-bottom: 1px solid #d4d7de;
    
        -webkit-animation-name: menuAnim; /* Safari 4.0 - 8.0 */
        -webkit-animation-duration: 0.5s; /* Safari 4.0 - 8.0 */
        animation-name: menuAnim;
        animation-duration: 0.5s;

        .logo{
            display: flex;
            -webkit-animation-name: logoAnim;
            -webkit-animation-duration: 0.5s;
            animation-name: logoAnim;
            animation-duration: 0.5s;
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