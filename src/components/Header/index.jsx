import { Component } from 'react';
import styled from 'styled-components';
import logo from '../../assets/LOGO.svg';
import colors from '../../utils/style/colors';

const HeaderStyle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .header__logo {
        object-fit: contain;
        width: 210px;
    }
`;

const HeaderBts = styled.div`
    a {
        font-size: 24px;
        margin-left: 60px;
        color: ${colors.primary};
    }
`;

class Header extends Component {
    render() {
        return (
            <HeaderStyle className="header">
                <img src={logo} alt="logo" className="header__logo" />
                <HeaderBts className="header__bts">
                    <a href="#">Accueil</a>
                    <a href="#">A Propos</a>
                </HeaderBts>
            </HeaderStyle>
        );
    }
}

export default Header;
