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

    @media (max-width: 1024px) {
        font-size: 0.8rem;
        padding: 0.7em 1em;
        border-radius: 25px;
        width: 100%;
        max-width: 250px;

        .icon {
            margin-right: 0.5rem;
        }
    }

    @media (max-width: 480px) {
        font-size: 0.75rem;
        padding: 0.6em 1em;
        border-radius: 25px;
        width: 100%;
        max-width: 250px;
        
        .icon {
        margin-right: 0.5rem;
        }
    }
    `;
