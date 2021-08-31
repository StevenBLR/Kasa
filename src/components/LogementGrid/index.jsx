import { Component } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logements from '../../data/logements.json';
import { Link } from 'react-router-dom';

const GridStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 40px 0;
    padding: 10px;
    border-radius: 10px;
    background-color: ${colors.bgGray};
`;

const GridItemStyle = styled(Link)`
    display: flex;
    align-items: flex-end;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    box-sizing: border-box;
    margin: 25px;
    color: white;
    background-color: ${colors.primary};
    background-position: center;
    h2 {
        box-sizing: border-box;
        font-size: 18px;
        padding: 25px;
        text-shadow: 2px 2px black;
        width: 70%;
        margin: 0;
    }
`;
console.log(logements);

export class LogementGrid extends Component {
    render() {
        return (
            <GridStyle className="lgmt-grid">
                {logements.map((lgmt) => (
                    <GridItemStyle
                        to={`/housing/${lgmt.id}`}
                        className="lgmt-grid__card"
                        key={lgmt.id}
                        style={{ backgroundImage: `url(${lgmt.cover})` }}
                    >
                        <h2>{lgmt.title}</h2>
                    </GridItemStyle>
                ))}
            </GridStyle>
        );
    }
}

export default LogementGrid;
