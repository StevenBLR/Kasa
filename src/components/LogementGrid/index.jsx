import { Component } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logements from '../../data/logements.json';

const GridStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
    padding: 40px;
    border-radius: 10px;
    background-color: ${colors.bgGray};
`;

const GridItemStyle = styled.div`
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
        font-size: 18px;
        padding: 25px;
        text-shadow: 2px 2px black;
        width: 60%;
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
                        className="lgmt-grid__card"
                        key={lgmt.id}
                        style={{ backgroundImage: `url(${lgmt.cover})` }}
                    >
                        {/* <img
                            src={lgmt.cover}
                            alt={lgmt.title + ' img'}
                            className="lgmt-grid__img"
                        /> */}
                        <h2>{lgmt.title}</h2>
                    </GridItemStyle>
                ))}
            </GridStyle>
        );
    }
}

export default LogementGrid;
