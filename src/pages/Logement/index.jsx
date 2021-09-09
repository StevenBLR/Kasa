import { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import datas from '../../data/logements.json';
import ErrorPage from '../ErrorPage/index';

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
        // If lgmt id is found
        if (datas.find((d) => d.id == this.props.match.params.id)) {
            const dataSet = datas.find(
                (d) => d.id == this.props.match.params.id
            );

            return (
                <div>
                    <Banner image={dataSet.cover} height="415" />
                </div>
            );
        }
        // Else show 404 error page
        else {
            return <ErrorPage />;
        }
    }
}

export default Logement;
