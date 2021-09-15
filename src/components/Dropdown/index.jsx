import { Component } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Toggle from '../Buttons';

// PROPS ----------------------------------------------------------
// title : Texte affiché sur le label
// content : Texte affiché dans le dropdown
// openOnStart : Booleen qui conditionne l'etat du dropdown
// contentSize : Taille de la police de contenu
// ----------------------------------------------------------------
class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Edition de is open au montage ( 1ere fois ) / soit valeur entrée, soit false par defaut
            isOpened: this.props.openOnStart || false,
        };
    }
    // Change l'etat du dropdown (Ouvert / Ferme)
    toggleDropdown = () => {
        this.setState({ isOpened: !this.state.isOpened });
    };

    render() {
        const { title, content, contentSize } = this.props;
        const { isOpened } = this.state;

        return (
            <DropdownStyled
                className="dropdown"
                onClick={this.toggleDropdown}
                contentSize={contentSize}
            >
                <div className="dropdown__label">
                    <p>{title}</p>
                    <Toggle
                        type="toggle"
                        state={isOpened}
                        action={this.toggleDropdown}
                    />
                </div>
                {isOpened && (
                    <div className="dropdown__content">
                        {/* Switch en fonction txt ou Obj */}
                        {typeof content == 'object' ? (
                            <ul>
                                {content.map((c) => (
                                    <li>{c}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{content}</p>
                        )}
                    </div>
                )}
            </DropdownStyled>
        );
    }
}

export default Dropdown;

const DropdownStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;

    font-size: 24px;
    margin: auto;

    margin-block: 20px;
    .dropdown__label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 2;
        border-radius: 5px;
        width: 100%;
        height: 47px;
        background-color: ${colors.primary};
    }
    .dropdown__label p {
        color: white;
        margin-left: 20px;
    }

    .dropdown__content {
        position: relative;
        top: -5px;
        border-radius: 0 0 5px 5px;
        padding: 20px;
        color: ${colors.primary};
        background-color: ${colors.bgGray};
    }
    .dropdown__content p,
    .dropdown__content li {
        // valeur heritée des props ou 24px par defaut
        font-size: ${({ contentSize }) => contentSize || '24px'};
    }
    ul {
        list-style-type: none;
        padding: unset;
    }
    .button {
    }
`;
