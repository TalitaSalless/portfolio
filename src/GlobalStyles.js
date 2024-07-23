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
  footer {
    text-align: center;
    padding-bottom: 2rem;

    span {
      font-weight: bold;
      color: var(--secondary-color);
    }
  }
`;

export default GlobalStyle;




/* .gallery {
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
  } */