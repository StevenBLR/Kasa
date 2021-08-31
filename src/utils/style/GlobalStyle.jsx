import { createGlobalStyle } from 'styled-components';

const base = `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
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
}
`;

function GlobalStyle() {
    const AllGlobalStyle = createGlobalStyle`
    ${base}
    ${responsive}
  `;
    return <AllGlobalStyle />;
}

export default GlobalStyle;
