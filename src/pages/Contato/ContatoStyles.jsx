import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* max-height: 80vh; */
  /* min-height: 90vh; */
  /* padding: 40px; */
  /* position: relative; */

  position: relative;
  /* min-height: 100vh; Garantir que o conteúdo ocupe toda a altura da tela */
  padding-bottom: 60px; /* Ajuste conforme a altura do seu Footer */
`;

export const Card = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  padding: 2rem;
  position: relative;

  /* // Vídeo de fundo
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/assets/Background.png') no-repeat center center;
    background-size: cover;
    opacity: 0.1;  // Ajuste a opacidade para não interferir no conteúdo
    z-index: -1;  // Coloca o vídeo atrás do conteúdo */
  }
`;

export const CardContent = styled.div`
  text-align: center;
  width: 100%;
  position: relative;  // Garanta que o conteúdo tenha a camada superior
  z-index: 1; // Coloca o conteúdo na camada acima do vídeo
    p {
      font-size: 1rem;
      color: #ddd;
      margin-bottom: 1.5rem;
    }
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
`;

export const Icon = styled.div`
  color: #ffffff;
  margin-right: 10px;
  font-size: 1.2rem;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  color: white;
  font-size: 1rem;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: none;
  background: transparent;
  color: white;
  font-size: 1rem;
  outline: none;
  resize: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const ErrorMessage = styled.span`
  color: var(--alert-color);
  font-size: 0.9rem;
  margin-bottom: 10px;
  display: block;
`;
