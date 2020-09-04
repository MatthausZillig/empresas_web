import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 4em;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ theme }) => theme.grid.s};
`;

export const Image = styled.img`
  margin: 1em auto;
  display: block;
`;
