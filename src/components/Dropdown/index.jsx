import { Component } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const DropdownStyled = styled.div`
    display: flex;
    max-width: 1000px;
    margin: auto;

    margin-block: 20px;
    .dropdown__label {
        display: flex;
        align-items: center;
        border-radius: 5px;
        width: 100%;
        height: 47px;
        background-color: ${colors.primary};
    }
    .dropdown__label p {
        font-size: 24px;
        color: white;
        margin-left: 20px;
    }
`;

export class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { title, content } = this.props;
        return (
            <DropdownStyled className="dropdown">
                <div className="dropdown__label">
                    <p>{title}</p>
                </div>
                <div className="dropdown__content"></div>
            </DropdownStyled>
        );
    }
}

export default Dropdown;
