import { Component } from 'react';
import styled from 'styled-components';
// import img from '../../assets/bannerImg.png';

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
        border-radius: 25px;
        background-size: cover;
    }
    // Using before as a filter element
    .banner__bgImg:before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.5;
        background-color: rgb(25, 25, 25, 0.6); // Light gray
    }

    h1 {
        color: white;
        position: relative; // Lui donne un z-index;
        font-size: 2.5rem;
        margin: 40px;
    }
`;

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { message, image } = this.props;
        console.log(`${window.location}${image}`);
        return (
            <BannerStyled className="banner">
                <div
                    className="banner__bgImg"
                    style={{ backgroundImage: `url(${this.props.image})` }}
                >
                    <h1 className="banner__headline">{message}</h1>
                </div>
            </BannerStyled>
        );
    }
}

export default Banner;
