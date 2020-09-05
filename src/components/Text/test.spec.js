import React from 'react';
import { screen } from '@testing-library/react';
import 'jest-styled-components';
import { renderWithTheme } from '../../utils/test/helpers';
import Text from './index';

describe('Text Component', () => {
  it('Should be black by default', () => {
    renderWithTheme(<Text />);
    expect(screen.getByTestId('text')).toBeInTheDocument();
  });
  it('Should be 1.2rem', () => {
    renderWithTheme(<Text />);
    expect(screen.getByTestId('text')).toBeInTheDocument();
  });
});
