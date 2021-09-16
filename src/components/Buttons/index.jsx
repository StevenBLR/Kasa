import { Component } from 'react';
import styled from 'styled-components';

// PROPS ----------------------------------------------------------
// type : simple (1 etat) / toggle (2 etats)
// icon : Classe Font Awesome qui definit l'icone a afficher
// titleColor : Couleur du titre
// state : Etat du bouton ( Toggle = on/off )
// action : Fonction appelée lors du click
// ----------------------------------------------------------------
class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleOn: false,
        };
    }

    render() {
        const {
            type = 'button',
            icon,
            id,
            state,
            titleColor = 'white',
            action,
        } = this.props;

        return (
            <ButtonStyled className={type} titleColor={titleColor}>
                {type == 'toggle' && (
                    <div>
                        <input
                            type="checkbox"
                            class="button__check-box"
                            onClick={action}
                        ></input>
                        <i
                            class={`fas fa-chevron-${state ? 'up' : 'down'}`}
                        ></i>
                    </div>
                )}
                {type == 'button' && <i className={icon} onClick={action}></i>}
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
    cursor: pointer;
    color: ${({ titleColor }) => titleColor};

    input {
        z-index: 10;
        cursor: pointer;
        position: absolute;
        width: 100%;
        height: 100%;
        margin: unset;
        opacity: 0;
    }
`;
