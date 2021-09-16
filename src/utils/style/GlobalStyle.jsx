import { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

const base = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
 *{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  body {
      margin: 40px;
      margin-bottom: 0;
      max-width: 1240px;
  }
`;

const responsive = `
// Wide desktop version -------------------------------------------------------------------
@media (min-width: 1330px) {
  body{
    margin: 40px auto;
    margin-bottom: 0;
  }
}

// Mobile version -------------------------------------------------------------------------
@media (max-width: 800px) {

  body {
    margin: 20px 15px;
  }
  .header .header__logo{
    width: 20vw;
    min-width: 120px;
  }

  .header__bts a{
    font-size: clamp(16px, 3vw, 50px);
    margin-left: clamp(11px,5vw,40px);

  }
  main .lgmt-grid{
    padding: 0;
    margin-top: clamp(15px, 3vw, 40px);
    background-color: transparent;
  }
  .lgmt-grid .lgmt-grid__card{
    width: 100%;
    margin: 0;
    height: clamp(180px,40vw,230px);
    margin-bottom: clamp(15px, 3vw, 40px);
  }
  .banner__bgImg .banner__headline{
    font-size: 24px;
  }

  .banner .banner__bgImg{
    height: 110px;
    border-radius: 10px;
  }

  // Page logement -----------------------------------------------------------------------------
  #root .lgmt__dropdowns{
    flex-direction: column;
    min-height: unset;
  }
  
  .lgmt__infos{
    flex-direction: column;
  }

  .lgmt-banner{
    margin-top: 20px;
  }

  .lgmt-banner .banner__bgImg{
    height: 255px;
    border-radius: 10px;
  }

  .lgmt__dropdowns .dropdown{
    width: 100%;
  }

  .dropdown .dropdown__label p{
    font-size: 13px;
  }

  .dropdown .dropdown__label{
    height: 35px;
  }

  .dropdown .dropdown__content{
    padding: 5px 20px;
  }

  .dropdown .dropdown__content p, .dropdown .dropdown__content li{
    font-size: 12px;
  }
  .lgmt__infos .lgmt__right-bloc{
    margin-top: 10px;
    align-items: center;
    flex-direction: row-reverse;
  }
  .rating-stars .star{
    margin: unset;
    margin-right: 5px;
    font-size: clamp(12px,4.5vw,24px);
  }
  
}
`;

class GlobalStyle extends Component {
    componentDidMount() {
        // Add Font awesome CDN
        const script = document.createElement('script');
        script.src = 'https://kit.fontawesome.com/3dfad0cb79.js';
        script.setAttribute('crossorigin', 'anonymous');
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return <AllGlobalStyle />;
    }
}

export default GlobalStyle;

const AllGlobalStyle = createGlobalStyle`
  ${base}
  ${responsive}
`;
