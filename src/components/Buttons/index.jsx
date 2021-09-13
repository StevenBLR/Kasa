import { Component } from 'react';
import styled from 'styled-components';

// PROPS ----------------------------------------------------------
// type : simple (1 etat) / toggle (2 etats)
// icon : Classe Font Awesome qui definit l'icone a afficher
// open : (toggle) Booleen qui conditionne l'icone a afficher
// color : Couleur du bouton
// ----------------------------------------------------------------
class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleOn: false,
        };
    }

    // toggleBt = () => {
    //     this.setState({ toggleOn: this.onClick });
    //     console.log('Hola');
    //     return this.state.toggleOn;
    // };

    render() {
        const {
            type = 'simple',
            icon,
            openOnStart,
            isOpened,
            color = 'white',
            onClick,
        } = this.props;

        //if (type == 'simple')
        return (
            <ButtonStyled className="button" color={color}>
                {type == 'toggle' && (
                    <input
                        type="checkbox"
                        class="button__check-box"
                        onClick={onClick}
                    ></input>
                )}
                {isOpened ? (
                    <i class="fas fa-chevron-up"></i>
                ) : (
                    <i class="fas fa-chevron-down"></i>
                )}
                {/* <i class={`fas fa-chevron-${isOpened ? 'up' : 'down'}`}></i> */}
            </ButtonStyled>
        );
    }
}

export default Buttons;

const ButtonStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    padding-inline: 10px;
    color: ${({ color }) => color};

    input {
        z-index: 10;
        position: absolute;
        width: 100%;
        height: 100%;
        margin: unset;
        opacity: 0;
    }
`;
