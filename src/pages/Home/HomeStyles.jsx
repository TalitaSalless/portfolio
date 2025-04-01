import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerInfos = styled.div`
  height: 87vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 2rem;
  gap: 8rem;

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
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;

  &:hover {
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.5);
  }
`;

export const JobTitle = styled.h2`
  font-size: 1.8rem;
  font-family: "Nunito", sans-serif;
  color: var(--secondary-color);
  margin-bottom: 1rem;
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
`;

export const AboutText = styled.div`
  h1 {
    font-size: 1.8rem;
    font-family: "Nunito", sans-serif;
    color: var(--secondary-color);
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    font-family: "Nunito", sans-serif;
    text-align: justify;
    font-size: 1.4rem;
    margin-bottom: 2rem;
    line-height: 2rem;
  }
`;

export const IconContainer = styled.div`
  font-size: 2.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  animation: fadeIn 1.5s ease-out forwards;

  i {
    transition: transform 0.3s ease-in-out, color 0.3s ease;
    animation: pulse 2s infinite;

    &:hover {
      transform: scale(1.2);
      color: var(--secondary-color);
    }
  }

  @keyframes fadeIn {
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
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;







// import styled from 'styled-components';

// export const ContainerHome = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

// export const ContainerInfos = styled.div`
//   height: 53rem; /* 848px */
//   width: 90%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 2rem;
// `;

// export const AboutSection = styled.div`
//   width: 50%;
//   height: 80%;
//   margin: 1rem;
//   padding: 2rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const ProfileSection = styled.div`
//   width: 50%;
//   height: 80%;
//   margin: 1rem;
//   padding: 2rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   background-image: url("/assets/Gradient.svg");
//   background-size: 625px 700px;
//   background-position: center;
//   background-repeat: no-repeat;
// `;

// export const ProfileImage = styled.img`
//   margin-top: 3rem;
//   width: 300px;
//   height: 300px;
//   border-radius: 50%;
//   transition: transform 1s ease;

//   &:hover {
//     transform: scale(1.1);
//   }
// `;

// export const AboutText = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 0 1.4rem;

//   h1 {
//     font-size: 2.5rem;
//     font-family: "Nunito", sans-serif;
//     color: var(--secondary-color);
//     margin-bottom: 1rem;
//   }

//   p {
//     font-family: "Nunito", sans-serif;
//     text-align: justify;
//     font-size: 1.3rem;
//     margin-bottom: 3rem;
//     line-height: 2rem;
//   }
// `;

// export const IconContainer = styled.div`
//   font-size: 3rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 1rem;

//   i {
//     transition: transform 1s ease;

//     &:hover {
//       transform: scale(1.2);
//       color: var(--secondary-color);
//     }
//   }
// `;

