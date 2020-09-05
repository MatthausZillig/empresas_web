import styled from 'styled-components';

export const Wrapper = styled.div`
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
  input:focus {
    outline-offset: none;
    outline: none;
  }
`;
