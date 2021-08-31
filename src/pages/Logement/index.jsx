import { Component } from 'react';
import styled from 'styled-components';

const BannerStyle = styled.img`
    object-fit: cover;
    width: 100%;
    height: 415px;
`;

export class Logement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return <BannerStyle />;
    }
}

export default Logement;
