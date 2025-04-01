import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    margin-bottom: 0.8rem;
    background-color: rgba(0, 0, 0, 0.195);
`;

export const CardContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    width: 100%;
    height: 100%;
    padding: 0 0.1rem;
    gap: 0.5rem;
`;

export const CardText = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3 {
        color: var(--primary-purple);
    }
`;

export const ProjectDescription = styled.p`
    line-height: 1.6rem;
    font-size: 0.9rem;
    margin: 1rem 1rem;
    padding: 1rem 1rem;
    border-radius: 1rem;
    text-align: justify;
`;

export const CardImage = styled.div`
    height: 100%;
    width: 50%;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        object-fit: contain;
        width: 400px;
        height: 400px;
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
        color: var(--primary-color);
        background-color: var(--primary-purple);
    }
`;

