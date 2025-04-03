import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* background-image: url("/assets/back-new.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
`;

export const ContainerInfos = styled.div`
  height: 87vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 2rem;
  gap: 8rem;

  @media (max-width: 1024px) {
    gap: 5rem;
    height: 100%;
  }
`;


export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 50%;
`;

export const ProfileImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  margin-bottom: 2rem;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.3));

  &:hover {
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 0 20px rgba(95, 55, 213, 0.8);
    border: 4px solid var(--secondary-purple);
  }

  @media (max-width: 1023px) {
    width: 15rem;
    height: 15rem;
    &:active, &:focus {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(95, 55, 213, 0.6);
    }
  }
`;

export const AboutSection = styled.div`
  padding: 2rem;
  max-width: 50%;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease-out forwards;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1023px) {
    padding: 0;
  }
`;

export const AboutText = styled.div`
  h1 {
    font-size: 2.2rem;
    font-family: "Nunito", sans-serif;
    text-align: center;
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    background: linear-gradient(90deg, var(--primary-purple), var(--secondary-purple));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 1s ease forwards;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  p {
    font-family: "Nunito", sans-serif;
    text-align: justify;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--primary-color);
    margin-bottom: 2rem;
    max-width: 58rem;
    margin-left: auto;
    margin-right: auto;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 1s ease forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1023px) {
    h1 {
      font-size: 1.7rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.8rem;
    }
  }
`;

export const IconContainer = styled.div`
  font-size: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  opacity: 0;
  animation: fadeInIcons 1.5s ease-out forwards;

  i {
    transition: transform 0.3s ease-in-out, color 0.3s ease, filter 0.3s ease;
    animation: pulse 2s infinite;
    color: var(--primary-purple);
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));

    &:hover {
      transform: scale(1.2);
      color: var(--secondary-purple);
      filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.3)); /* Efeito de foco ao passar o mouse */
    }
  }

  @keyframes fadeInIcons {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  @media (max-width: 1023px) {
    i {
      font-size: 1.8rem;
      display: flex;
      justify-content: center;
      align-items: center;

    }
    &:active, &:focus {
      transform: scale(1);
      color: var(--secondary-purple);
      filter: drop-shadow(0 0 12px rgba(0, 0, 0, 0.3));
    }
  }
`;