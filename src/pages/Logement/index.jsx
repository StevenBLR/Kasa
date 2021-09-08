import { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import datas from '../../data/logements.json';

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

    // Tester id
    // Si existant --> Maj
    // Sinon --> Redirect erreur
    componentDidMount() {
        // console.log(window.location.href);
        // const urlParams = new URLSearchParams(window.location.href);
        // console.log(urlParams.get('id'));
    }

    render() {
        if (datas.find((d) => d.id == this.props.match.params.id)) {
            const dataSet = datas.find(
                (d) => d.id == this.props.match.params.id
            );

            console.log('Found item');
            console.log('DataSet ? ', dataSet);
            return <BannerStyle src={dataSet.cover} />;
        } else {
            return;
        }
    }
}

export default Logement;
