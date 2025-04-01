import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 2rem; */
  padding: 1rem 2rem;  // Ajuste o padding conforme necessário
  color: white;
  font-size: 0.8rem;
`;

export const FooterText = styled.p`
  text-align: center;
  margin: 0;  // Remover margem para que o texto ocupe o espaço corretamente
`;

export const FooterSpan = styled.span`
  font-weight: bold;
  color: var(--secondary-color);  // Uma cor dourada para dar destaque, pode mudar conforme sua paleta
`;
