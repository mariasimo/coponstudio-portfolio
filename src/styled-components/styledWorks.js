import styled from 'styled-components';
import {colors} from '../utils/Constants'

const Works = styled.section`
    .container{
        margin: 2rem 0;
        display: flex;
        flex-wrap: wrap;
        margin: 0 -0.5%;

        .work-item{
            width: 48%;
            margin: 0.5%;
            display: inline-block;
            position: relative;
            
            .wrapper{
                position: relative;
                display: flex;
                justify-content: center;
                color: ${colors.white};
                font-size: 1.5em;

                img{width: 100%}
            
                .overlay{
                    padding: 1em; 
                    position: absolute;
                    background-color: rgba(0,0,0,.5);
                    bottom: 0;
                    top: 0;
                    left: 0;
                    right: 0;
                }
            }
        }
    }
`


export default Works;