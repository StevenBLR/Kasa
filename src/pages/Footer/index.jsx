import { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/LOGO_white.png';

const FooterStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    height: 209px;
    background-color: black;
`;

const LogoStyled = styled.img`
    object-fit: contain;
    width: 110px;
    margin-bottom: 10px;
`;

export class Footer extends Component {
    render() {
        return (
            <FooterStyled className="footer">
                <LogoStyled src={logo} alt="logo" />
                <p className="footer__legals">
                    © 2020 Kasa. All rights reserved
                </p>
            </FooterStyled>
        );
    }
}

export default Footer;
