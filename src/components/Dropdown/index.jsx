import { Component } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Buttons from '../Buttons';

// PROPS ----------------------------------------------------------
// title : Texte affiché sur le label
// content : Texte affiché dans le dropdown
// openOnStart : Booleen qui conditionne l'etat du dropdown
// ----------------------------------------------------------------
class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: this.props.open,
        };
    }

    toggleDropdown = () => {
        this.setState({ isOpened: !this.state.isOpened });
        console.log(this.state.isOpened ? 'Fermé' : 'Ouvert');
        return this.state.onClickisOpened;
    };
    render() {
        const { title, content, openOnStart } = this.props;
        const { isOpened } = this.state;
        if (typeof content == 'object') {
            const processedContent = [];
            content.map((c) => processedContent.push(<li>{c}</li>));
            console.log(processedContent);
        } else {
            const processedContent = content;
        }
        // const processedContent = typeof content == "object" ?
        // []

        console.log('Type of content', typeof content);

        return (
            <DropdownStyled className="dropdown" onClick={this.toggleDropdown}>
                <div className="dropdown__label">
                    <p>{title}</p>
                    <Buttons
                        type="toggle"
                        openOnStart={openOnStart}
                        onClick={this.toggleDropdown}
                    />
                </div>
                {isOpened && (
                    <div className="dropdown__content">
                        {/* Switch en fonction txt ou Obj */}
                        <p>{content}</p>
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

    .button {
    }
`;
