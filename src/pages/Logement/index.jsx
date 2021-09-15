import { Component } from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import Dropdown from '../../components/Dropdown';
import RatingStars from '../../components/RatingStars';
import Tag from '../../components/Tag';
import datas from '../../data/logements.json';
import colors from '../../utils/style/colors';
import ErrorPage from '../ErrorPage/index';

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
                <LgmtStyled>
                    <Banner image={dataSet.cover} height="415" />
                    <div className="lgmt__infos">
                        <div className="lgmt__left-bloc">
                            <h1 className="lgmt__title">{dataSet.title}</h1>
                            <h2 className="lgmt__location">
                                {dataSet.location}
                            </h2>
                            <div className="lgmt__tags">
                                {dataSet.tags.map((t) => (
                                    <Tag
                                        key={`${t}_${dataSet.id}`}
                                        name={t}
                                    ></Tag>
                                ))}
                            </div>
                        </div>
                        <div className="lgmt__right-bloc">
                            <div className="lgmt__profil-section">
                                <p>{dataSet.host.name}</p>
                                <img
                                    src={dataSet.host.picture}
                                    alt={`${dataSet.host.name} profil pic`}
                                />
                            </div>
                            <RatingStars
                                totalStars={5}
                                startValue={parseInt(dataSet.rating)}
                            />
                        </div>
                    </div>
                    <div className="lgmt__dropdowns">
                        <Dropdown
                            title="Description"
                            content={dataSet.description}
                            contentSize="18px"
                            openOnStart={true}
                        />
                        <Dropdown
                            title="Equipements"
                            content={dataSet.equipments}
                            contentSize="18px"
                            openOnStart={true}
                        />
                    </div>
                </LgmtStyled>
            );
        }
        // Else show 404 error page
        else {
            return <ErrorPage />;
        }
    }
}

export default Logement;

const styleGeneral = `
    color: ${colors.primary};
    h1,h2 {
        margin-block: 10px;
    }
    h2 {
        font-size: 18px;
    }
    .lgmt__infos {
        display: flex;
        justify-content: space-between;
        margin: 20px 0;
    }
`;

const styleLeftBloc = `
    .lgmt__tags {
        display: flex;
    }
`;

const styleRightBloc = `
    .lgmt__right-bloc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
    }
    .lgmt__profil-section {
        display: flex;
        align-items: center;
        height: 70px;
    }
        .lgmt__profil-section img {
            height: 90%;
            border-radius: 100%;
        }
        .lgmt__profil-section p {
            font-size: 18px;
            margin-right: 8px;
            max-width: 100px;
            text-align: end;
        }
`;

const styleDropdownBloc = `
    .lgmt__dropdowns{
        display:flex;
        justify-content: space-between;
        min-height: 200px;
    }
    .dropdown{
        width: 46%;
        margin: unset;
        margin-bottom: 20px;
    }
        .dropdown__content p{
            font-size: 18px;
            font-weight: 400;
        }
`;

const LgmtStyled = styled.div`
    ${styleGeneral}
    ${styleLeftBloc}
    ${styleRightBloc}
    ${styleDropdownBloc}
`;
