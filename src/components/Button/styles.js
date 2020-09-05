import styled from 'styled-components';

export const Wrapper = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: ${({ theme }) => theme.grid.l};
  height: 6rem;
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.spacing.l};
  cursor: pointer;
  border: none;
  :focus {
    outline: none;
  }
`;
