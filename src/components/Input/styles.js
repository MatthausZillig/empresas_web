import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.m};
  border-bottom: 1px solid #383743;
  width: ${({ theme }) => theme.grid.l};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  input {
    border: none;
    background: inherit;
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
