import { Component } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

// PROPS ----------------------------------------------------------
// totalStars : Nombre total d'étoiles a afficher
// startValue : Valeur initiale de la notation
// ----------------------------------------------------------------
export class RatingStars extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { totalStars, startValue } = this.props;
        const starsBloc = [];

        // Populate stars
        for (let i = 0; i < totalStars; i++) {
            starsBloc.push(
                <i
                    className={`fas fa-star star ${
                        i < startValue ? 'on' : 'off'
                    }`}
                ></i>
            );
        }

        return <StarsStyled className="rating-stars">{starsBloc}</StarsStyled>;
    }
}

export default RatingStars;

const StarsStyled = styled.div`
    .off {
        color: ${colors.secondary};
    }
    .star {
        font-size: 24px;
        margin-left: 5px;
    }
`;
