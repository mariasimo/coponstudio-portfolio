import React from 'react';
import StyledFooter from '../styled-components/styledFooter';
import StyledNav from '../styled-components/styledMenu';


const Footer = () => (
    <StyledFooter>
        <div className='container'>
            <p className='contact'>
            If you want to give us $$$$ or say hi: <br></br>
            hola@coponstudio.es ✉
            </p>

            <div className="footerInfo">
                <p className='credits'>Copón Studio. Design, strategy & common sense © 2020.</p>
                <StyledNav>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                </StyledNav>
            </div>
        </div>
    </StyledFooter>
);

export default Footer;
