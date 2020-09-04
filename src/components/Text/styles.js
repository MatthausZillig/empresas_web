import styled from 'styled-components';

export const Wrapper = styled.p`
  width: ${({ theme }) => theme.grid.l};
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: 0.1px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing.m};
`;
