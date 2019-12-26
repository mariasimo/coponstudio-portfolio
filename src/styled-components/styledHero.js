import styled from 'styled-components';

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

        .intro{
            font-size: 2.5em;
            line-height: 1.45;
            max-width: 28em;

            p:first-child{            
                margin: 0;
            }
        }
    }
`


export default Hero;