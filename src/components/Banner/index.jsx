import { Component } from 'react';
import styled from 'styled-components';

// PROPS ----------------------------------------------------------
// message : Texte affiche sur la banner
// image : Image affichée sur la banner
// height : Hauteur de la bannière
// filter : Valeur d'opacité du filter sur l'image (0 par defaut)
// ----------------------------------------------------------------
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { message, image, height = 180, filter = 0, id } = this.props;
        return (
            <BannerStyled
                className={`banner ${id}`}
                image={image}
                height={height}
                filter={filter}
            >
                <div className="banner__bgImg">
                    <h1 className="banner__headline">{message}</h1>
                </div>
                {this.props.children}
            </BannerStyled>
        );
    }
}

export default Banner;

const BannerStyled = styled.div`
    margin-top: 40px;
    position: relative;
    .banner__bgImg {
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: cover;
        width: 100%;
        height: ${({ height }) => height}px;
        position: relative;
        overflow: hidden;
        border-radius: 25px;
        background-size: cover;
        background-position: center;
        background-image: url(${({ image }) => image});
    }

    // Using before as a filter element
    .banner__bgImg:before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: ${({ filter }) => filter};
        background-color: rgb(25, 25, 25, 0.6); // Light gray
    }

    h1 {
        color: white;
        position: relative; // Lui donne un z-index;
        font-size: 2.5rem;
        margin: 40px;
    }
`;
