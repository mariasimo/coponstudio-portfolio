import styled, {css} from 'styled-components';
import {colors} from '../utils/Constants'

const Hero = styled.section`
    height: 100vh;

    .container{
        padding: 1rem;
        display: flex;
        flex-direction: column;
        height: 100%;

        nav{
            margin-top: auto;
            display: flex;

            .theme-toggler {
               margin-left: auto;
            }
        }

        p{margin: 0;}
    }
`


export default Hero;