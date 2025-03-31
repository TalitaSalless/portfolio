import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background-image: url("/assets/Gradient.svg");
    background-size: 20rem;
    background-position: center;
    background-repeat: no-repeat;
    margin: 1rem 0;
    padding: 1rem 0;
`;

export const CardContent = styled.div`
    display: flex;
    margin-top: 30px;
    width: 100%;
    padding: 1rem;
`;

export const CardText = styled.div`
    width: 50%;
`;

export const CardImage = styled.div`
    width: 50%;
    border-radius: 1rem;
    img {
        object-fit: contain;
        width: 400px;
        height: 300px;
        transition: 0.3s;
        border-radius: 4px;
    }

    img:hover {
        transform: translateY(-5px);
    }
`;

export const CardLinks = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 1rem;
    padding: 1rem 1rem;
    a {
        text-decoration: none;
        position: relative;
        margin-right: 10px;
        color: #ffffff;
    }
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px 10px;
    font-size: 0.8rem;
    font-weight: bold;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    color: var(--secondary-color);
    background-color: #1f1b1bf7;

    &:hover {
        color: #9ca3af;
    }

    .icon {
        margin-right: 0.5rem;
    }
`;

export const ProjectDescription = styled.p`
    line-height: 1.1rem;
    font-size: 0.9rem;
    margin: 1rem 1rem;
    padding: 1rem 1rem;
    background-color: rgba(0, 0, 0, 0.195);
    border-radius: 1rem;
`;
