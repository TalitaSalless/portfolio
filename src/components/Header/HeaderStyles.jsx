import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: transparent;

    @media (max-width: 1023px) {
        padding: 1rem 1rem;
    }
`;

export const HeaderName = styled.div`
    font-size: 1.8rem;
    font-weight: bold;

    @media (max-width: 1023px) {
        font-size: 1.6rem;
    }
`;

export const HeaderBrand = styled(Link)`
    color: var(--primary-color);
    text-decoration: none;

    &:hover {
        color: var(--secondary-purple);
    }
`;

export const HeaderNavbar = styled.nav`
    .active {
        color: var(--secondary-color);
    }
`;

export const NavbarList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const NavbarItem = styled.li`
    margin: 0 1rem;
    font-weight: 600;
    font-size: 1.2rem;

    a {
        color: var(--primary-color);
        transition: color 0.3s ease;

        &:hover {
            color: var(--secondary-purple);
        }
    }
    @media (max-width: 1023px) {
        font-size: 1.1rem;
    }
`;

export const SocialMediaContainer = styled.div`
    margin-right: 1rem;
`;


export const SocialMediaList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const SocialMediaItem = styled.li`
    margin: 0 0.8rem;
    font-size: 1.4rem; /* Tamanho um pouco maior para destaque */
    padding: 0.4rem;
    border-radius: 50%;
    border: 2px solid transparent; /* Evita contraste excessivo */
    background: rgba(255, 255, 255, 0.1); /* Fundo sutil */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;

    a {
        color: var(--primary-color);
        transition: color 0.3s ease-in-out;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &:hover {
        background: var(--secondary-purple); /* Destaque ao passar o mouse */
        transform: scale(1.1); /* Efeito de leve crescimento */
        box-shadow: 0 0 12px rgba(95, 55, 213, 0.6); /* Brilho ao redor */

        a {
            color: var(--primary-color) /* Ícone fica branco no hover */
        }
    }

    @media (max-width: 1023px) {
        font-size: 1.1rem;

        a {
            font-size: 1rem;
        }
    }
`;
