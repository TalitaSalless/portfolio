import styled from 'styled-components';

export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerInfos = styled.div`
  height: 53rem; /* 848px */
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
`;

export const AboutSection = styled.div`
  width: 50%;
  height: 80%;
  margin: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileSection = styled.div`
  width: 50%;
  height: 80%;
  margin: 1rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("/assets/Gradient.svg");
  background-size: 625px 700px;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ProfileImage = styled.img`
  margin-top: 3rem;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: transform 1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.4rem;

  h1 {
    font-size: 2.5rem;
    font-family: "Nunito", sans-serif;
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }

  p {
    font-family: "Nunito", sans-serif;
    text-align: justify;
    font-size: 1.3rem;
    margin-bottom: 3rem;
    line-height: 2rem;
  }
`;

export const IconContainer = styled.div`
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  i {
    transition: transform 1s ease;

    &:hover {
      transform: scale(1.2);
      color: var(--secondary-color);
    }
  }
`;

