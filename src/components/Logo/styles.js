import styled, { css } from 'styled-components';

const wrapperModifiers = {
  normal: (theme) => css`
    margin-top: ${({ theme }) => theme.spacing.l};
  `,
  white: () => css`
    margin-top: 0;
    width: 30rem;
  `,
};

export const Logo = styled.img`
  ${({ theme, white }) => css`
    ${white ? wrapperModifiers.white() : wrapperModifiers.normal(theme)}
  `}
`;
