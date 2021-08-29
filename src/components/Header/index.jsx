import { Component } from 'react';
import logo from '../../assets/LOGO.svg';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt="logo" className="header__logo" />
            </div>
        );
    }
}

export default Header;