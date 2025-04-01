import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: transparent;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    }
`;

export const HeaderName = styled.div`
    font-size: 1.8rem;
    font-weight: bold;
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
        color: var(--secondary-color:);
    }
`;

export const NavbarList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        margin-top: 1rem;
    }
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
`;

export const SocialMediaContainer = styled.div`
    margin-right: 1rem;
`;


export const SocialMediaList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
        margin-top: 1rem;
    }
`;

export const SocialMediaItem = styled.li`
    margin: 0 0.8rem;
    font-size: 1.5rem;

    a {
        color: var(--primary-color);
        transition: color 0.3s ease;

        &:hover {
            color: var(--secondary-purple);
        }
    }
`;
