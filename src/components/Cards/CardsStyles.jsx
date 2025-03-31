import styled from 'styled-components';

export const CardsContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  gap: 20px;
  border-radius: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Em telas pequenas, exibe os cards em uma única coluna */
  }
`;
