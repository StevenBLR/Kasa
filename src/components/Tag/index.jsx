import { Component } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

export class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { name } = this.props;
        return <TagStyled>{name}</TagStyled>;
    }
}

export default Tag;

const TagStyled = styled.span`
    display: flex;
    align-items: center;
    padding: 5px 20px;
    margin-right: 10px;
    margin-top: 5px;
    border-radius: 10px;
    font-size: 14px;
    color: white;
    background-color: ${colors.primary};
`;
