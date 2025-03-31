import styled from 'styled-components';
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: transparent;
    color: white;

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
    color: white;
    text-decoration: none;

    &:hover {
        color: #a3e4d7;
    }
`;

export const HeaderNavbar = styled.nav`
    .active {
        color: #a3e4d7;
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
    font-size: 1rem;
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
        color: white;
        transition: color 0.3s ease;
        font-size: inherit;

        &:hover {
        color: #a3e4d7;
        }
    }
`;
