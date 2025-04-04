import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5rem;
    background-color: transparent;


    @media (max-width: 1023px) {
        padding: 2rem 3rem;
    }
`;

export const HeaderName = styled.div`
    font-size: 1.8rem;
    font-weight: bold;

    @media (max-width: 1023px) {
        font-size: 1.5rem;
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
    margin: 0 3rem;
    font-weight: 600;
    font-size: 1.1rem;

    a {
        color: var(--primary-color);
        transition: color 0.3s ease;

        &:hover {
            color: var(--secondary-purple);
        }
    }
    @media (max-width: 1023px) {
        font-size: 1rem;
        margin: 0 1.5rem;
    }
`;


