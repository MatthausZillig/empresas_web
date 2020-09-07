import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 4em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.grid.l};
  z-index: ${({ theme }) => theme.layers.menu};

  p#errorMessage {
    height: 1.5rem;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.95;
    letter-spacing: -0.17px;
    text-align: center;
    color: #ff0f44;
    margin-top: ${({ theme }) => theme.spacing.m};
  }
`;
