// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #fff;
    --secondary-color: #20c997;
    --text-color: #777;
    --bg-color: #000;
    --container-width: 1170px;
  }

  * {
    font-family: 'Josefin Sans';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url(../../../public/background-portfolio.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* background-color: var(--bg-color); */
    color: var(--text-color);
  }
  body a {
  color: #777;
  text-decoration: none;
  transition: 0.4s;
  }
  body ul {
  list-style: none;
  }

  .gallery {
    max-width: var(--container-width);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;

    &-card {
      width: 31%;
      height: 400px;
      margin-bottom: 4%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);

      &-title {
        font-size: 2rem;
        font-weight: 300;
        margin-bottom: 1rem;
      }

      &-btn {
        padding: 0.6rem 2rem;
        border: 2px solid var(--primary-color);
        color: var(--primary-color);
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 1px;

        &:hover {
          background-color: var(--primary-color);
          color: var(--bg-color);
        }
      }
    }

    /* Adicione o restante dos estilos para os cards aqui */

  }

  footer {
    text-align: center;
    padding-bottom: 2rem;

    span {
      font-weight: bold;
      color: var(--secondary-color);
    }
  }
`;

export const mixins = {
  container: `
    max-width: var(--container-width);
    padding: 1.5rem 0;
    margin: 0 auto;
  `,
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  bgImg: (img) => `
    background-image: url('../img/${img}');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    filter: grayscale(100%);
    transition: 0.6s;

    &:hover {
      background-size: 110%;
      filter: grayscale(0%);
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../img/${img}');
    }
  `,
  mobile: (content) => `
    @media (max-width: 425px) {
      ${content}
    }
  `,
};

export default GlobalStyle;
