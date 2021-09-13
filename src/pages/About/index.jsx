import { Component } from 'react';
import Banner from '../../components/Banner';
import bannerImg from '../../assets/about_bannerImg.png';
import Dropdown from '../../components/Dropdown';

export class About extends Component {
    render() {
        const respectTxt =
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.';

        const fiabilityTxt =
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.';

        const serviceTxt =
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";

        const securityTxt =
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
        return (
            <div>
                <Banner image={bannerImg} />
                <Dropdown
                    title="Fiabilité"
                    content={fiabilityTxt}
                    openOnStart={false}
                />
                <Dropdown
                    title="Respect"
                    content={respectTxt}
                    openOnStart={true}
                />
                <Dropdown
                    title="Service"
                    content={serviceTxt}
                    openOnStart={false}
                />
                <Dropdown
                    title="Securité"
                    content={securityTxt}
                    openOnStart={false}
                />
            </div>
        );
    }
}

export default About;
