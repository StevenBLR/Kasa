import { Component } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const MessageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 100px 12%;
    text-align: center;
    color: ${colors.primary};
    * {
        color: ${colors.primary};
    }
    h1 {
        font-size: clamp(100px, 20vw, 500px);
        font-weight: 700;
        margin: unset;
    }
    h2 {
        font-size: clamp(20px, 2vw, 150px);
        font-weight: 500;
        margin-bottom: 80px;
    }
    a {
        text-decoration-line: underline;
    }
`;

class ErrorPage extends Component {
    render() {
        return (
            <MessageStyled>
                <h1>404</h1>
                <h2>Oups! la page que vous demandez n'existe pas.</h2>
                <a href="/">Retourner sur la page d'accueil</a>
            </MessageStyled>
        );
    }
}

export default ErrorPage;
