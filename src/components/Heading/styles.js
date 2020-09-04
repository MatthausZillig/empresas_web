import styled from 'styled-components';

export const Wrapper = styled.h2`
  width: 15rem;
  height: 2rem;
  font-family: ${({ theme }) => theme.font.fontFamily};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-top: ${({ theme }) => theme.spacing.l};
`;
