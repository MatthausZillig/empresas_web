import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: bold;
  width: ${({ theme }) => theme.grid.l};
  height: 6rem;
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.spacing.l};
  cursor: pointer;

  :hover {
    background: ${shade(0.2, '#57bbbc')};
  }
  border: none;
  :focus {
    outline: none;
  }
`;
