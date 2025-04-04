import styled from "styled-components";
// @media (max-width: 480px) { ... }     // Smartphones pequenos
// @media (max-width: 768px) { ... }     // Smartphones grandes e tablets pequenos
// @media (max-width: 1024px) { ... }    // Tablets
// @media (max-width: 1200px) { ... }    // Laptops menores


export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  /* width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */

  @media (max-width: 768px) {
    padding: 1rem;
  }

`;

export const ContainerInfos = styled.div`
  width: 90%;
  height: 87vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 2rem;
  gap: 8rem;

  @media (max-width: 1023px) {
    gap: 5rem;
    margin-top: -2rem;
  }
  @media (max-width: 1200px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    height: 85vh;
    width: 100%;
    padding-top: 2rem;
    flex-direction: column;
    gap: 0;

  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  max-width: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0;
  }
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

  @media (min-width: 1440px) {
    width: 22rem;
    height: 22rem;
  }

  @media (max-width: 1200px) {
    width: 18rem;
    height: 18rem;

    &:active, &:focus {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(95, 55, 213, 0.6);
    }
  }

  @media (max-width: 1023px) {
    width: 15rem;
    height: 15rem;

    &:active, &:focus {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(95, 55, 213, 0.6);
    }
  }

  @media (max-width: 768px) {
    width: 13rem;
    height: 13rem;
  }

  @media (max-width: 480px) {
    width: 10rem;
    height: 10rem;
  }

    @media (max-width: 360px) {
      width: 8rem;
      height: 8rem;
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

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {

    max-width: 100%;
    margin-bottom: 1rem;
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
  @media (min-width: 1440px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.6rem;
      line-height: 2.2rem;
      max-width: 65rem;
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

  @media (max-width: 1200px) {
    h1 {
      font-size: 1.6rem;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.8rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6rem;
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.1rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 1rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.3rem;
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

  @media (min-width: 1440px) {
    gap: 2rem;

    i {
      font-size: 3rem;
    }
  }

  @media (max-width: 1023px) {
    gap: 1.2rem;

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
  @media (max-width: 1200px) {
    i {
      font-size: 1.9rem;
    }
  }

  @media (max-width: 768px) {
    gap: 0.7rem;

    i {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    gap: 0.6rem;

    i {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 360px) {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    i {
      font-size: 1rem;
    }
}

`;


