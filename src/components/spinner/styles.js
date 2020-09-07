import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  border: 1.3em solid transparent;
  border-top: 1.3em solid #57bbbc;
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  animation: ${spin} 0.6s linear infinite;
  position: fixed;
  z-index: ${({ theme }) => theme.layers.alwaysOnTop};
`;

export const Overlay = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.layers.overlay};
  background: #ccc;
  opacity: 0.8;
  width: 100%;
  height: 100%;
`;
