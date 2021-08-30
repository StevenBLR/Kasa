import { createGlobalStyle } from 'styled-components';

const base = `
 *{
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }

  body {
      margin: 40px;
      max-width: 1240px;
  }
`;

const responsive = `
// Wide desktop version -------------------------------------------------------------------
@media (min-width: 1330px) {
  body{
    margin: 40px auto;
  }
}

// Mobile version -------------------------------------------------------------------------
@media (max-width: 800px) {
  .header .header__logo{
    width: 20vw;
    min-width: 100px;
  }

  .header__bts a{
    font-size: clamp(16px, 3vw, 50px);
    margin-left: clamp(11px,5vw,40px);

  }
  .lgmt-grid .lgmt-grid__card{
    width: 100%;
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
