import React from 'react';
import 'jest-styled-components';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Heading from './index';

describe('Heading Component', () => {
  it('Should be black by default', () => {
    renderWithTheme(<Heading />);
    expect(screen.getByRole('heading')).toHaveStyle('color: rgb(56, 55, 67)');
  });
  it('Should be black by default', () => {
    renderWithTheme(<Heading />);
    expect(screen.getByRole('heading')).toHaveStyle('font-size: 1.5em');
  });
});
