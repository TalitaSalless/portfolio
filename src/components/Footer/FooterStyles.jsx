import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 2rem; */
  padding: 1rem 2rem;
  color: white;
  font-size: 0.8rem;

  @media (max-width: 1023px) {
    padding: 1rem 1rem;
    font-size: 0.7rem;
  }
`;

export const FooterText = styled.p`
  text-align: center;
  margin: 0;  // Remover margem para que o texto ocupe o espaço corretamente
`;

export const FooterSpan = styled.span`
  font-weight: bold;
  color: var(--secondary-color);  // Uma cor dourada para dar destaque, pode mudar conforme sua paleta
`;
