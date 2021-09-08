import { Component } from 'react';
import Banner from '../../components/Banner';
import bannerImg from '../../assets/about_bannerImg.png';
import Dropdown from '../../components/Dropdown';

export class About extends Component {
    render() {
        const fiabilityTxt =
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';
        return (
            <div>
                <Banner image={bannerImg} />
                <Dropdown title="Fiabilité" content={fiabilityTxt} />
            </div>
        );
    }
}

export default About;
