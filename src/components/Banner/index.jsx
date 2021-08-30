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
        filter: brightness(0.85);
        border-radius: 25px;
        background-image: url(${img});
    }
    h1 {
        //color: white;
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
