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
// Wide desktop version
@media (min-width: 1330px) {
  body{
    margin: 40px auto;
  }
}
// Mobile version
@media (max-width: 800px) {
  .lgmt-grid .lgmt-grid__card{
    width: 100%;
  }
  .banner__bgImg .banner__headline{
    font-size: 24px;
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
