import styled, { css } from 'styled-components';

const wrapperModifiers = {
  normal: () => css`
    border-bottom: 1px solid #383743;
  `,
  error: () => css`
    border-bottom: 1px solid #ff0f44;
  `,
};

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.m};
  width: ${({ theme }) => theme.grid.l};
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${({ error }) => css`
    ${error ? wrapperModifiers.error() : wrapperModifiers.normal()}
    p {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #ff0f44;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.5rem;
    }
  `}

  ${({ isError }) => css`
    ${isError ? wrapperModifiers.error() : wrapperModifiers.normal()}
    p {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: #ff0f44;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-size: 1.5rem;
    }
  `}

  input {
    border: none;
    background: inherit;
    width: 23rem;
  }

  svg {
    margin-right: ${({ theme }) => theme.spacing.xs};
    width: 4rem;
  }
  svg[data-testid='icon-lock'] {
    height: 3.5rem;
  }
  input:focus {
    outline-offset: none;
    outline: none;
  }
`;
