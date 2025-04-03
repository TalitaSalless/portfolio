import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
    --primary-color: #e8e8e8;
    --primary-purple: #C1A0FD;
    --secondary-purple: #5F37D5;
    --button-background: #1F1B1B;
    --text-color: #828282;
    --alert-color: #FF4D4D;
}

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Comfortaa", sans-serif;
    }

    body {
        height: 100vh;
        color: var(--primary-color);
        background-image: url("/assets/back-new.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        ${'' /* background-image: url("/assets/Background.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat; */}
    }

    body a {
        color: var(--primary-color);
        text-decoration: none;
        transition: 0.4s;
    }

    body ul {
        list-style: none;
    }
`;

