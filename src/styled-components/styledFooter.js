import styled from 'styled-components';

const Footer = styled.section`
    height: 100vh;

    .container{
        padding: 2em 3em;
        display: flex;
        flex-direction: column;
        justify-contents: center;
        height: 100%;

        .contact {
            font-size: 2.5em;
        }

        .credits {
            font-size: 1.5em;
            margin: 0;
        }

        .footerInfo{
            display: flex;
            margin-top: auto;

            nav{margin-left: auto;}
        }
    }
`


export default Footer;