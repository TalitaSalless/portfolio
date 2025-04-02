    import styled from 'styled-components';

    export const StyledButton = styled.button`
    font-family: inherit;
    padding: 0.8em 1.5em;
    font-size: 0.9rem;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 30px;
    color: var(--primary-color);
    transition: all 0.3s ease;
    outline: none;
    background-color: var(--primary-purple);

    &:hover {
        background-color: var(--secondary-purple);
        color: var(--primary-color);
    }

    .icon {
        margin-right: 1rem;
    }
    `;
