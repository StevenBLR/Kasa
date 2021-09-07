import { Component } from 'react';
import styled from 'styled-components';
import img from '../../assets/bannerImg.png';

const BannerStyled = styled.div`
    margin-top: 40px;
    .banner__bgImg {
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: cover;
        width: 100%;
        height: 180px;
        position: relative;
        overflow: hidden;
        //filter: brightness(0.85);
        border-radius: 25px;
        background-image: url(${img});
    }
    // Using before as a filter element
    .banner__bgImg:before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background-color: teal;
    }

    h1 {
        color: white;
        position: relative; // Lui donne un z-index;
        font-size: 2.5rem;
        margin: 40px;
    }
`;

class Banner extends Component {
    render() {
        return (
            <BannerStyled className="banner">
                <div className="banner__bgImg">
                    <h1 className="banner__headline">
                        Chez vous, partout et ailleurs
                    </h1>
                </div>
            </BannerStyled>
        );
    }
}

export default Banner;
