import styled from "styled-components";

export const Button = styled.button`
    color: var(--primary-color);
    background-color: var(--primary-purple);
    font-size: 1rem;
    padding: 1rem 1rem;
    border: none;
    border-radius: 1rem;

    &:hover {
        color: var(--primary-color);
        background-color: var(--secondary-purple);
    }
    .icon {
        margin-right: 0.5rem;
    }
`;
