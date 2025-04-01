import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    padding: 0.6rem;
    font-size: 0.8rem;
    font-weight: bold;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: var(--secondary-color);
    background-color: var(--background-button);

    box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(6px);
    transition: transform 1s ease;

    &:hover {
        /* color: var(--primary-color);
        background-color: var(--secondary-color); */
        border: 1px solid var(--secondary-color);
        transform: scale(1.05);
    }

    .icon {
        margin-right: 0.5rem;
    }
`;
