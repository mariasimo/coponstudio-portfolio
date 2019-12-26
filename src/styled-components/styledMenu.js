import styled, {css} from 'styled-components';
import {colors} from '../utils/Constants'

const Menu = styled.nav`
    display: flex;

    li{
        list-style-type: none;
        font-size: 1.5em;
        margin-right: 1em;
        
        a {
            color: ${colors.black};
            text-decoration: none;
        }
    }
`


export default Menu;