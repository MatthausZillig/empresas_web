import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Text from './index';

describe('Text Component', () => {
  it('Should be black by default', () => {
    renderWithTheme(<Text />);
    expect(screen.getByTestId('text')).toHaveStyle({
      color: 'rgb(56, 55, 67)',
    });
  });
  it('Should be 1.2rem', () => {
    renderWithTheme(<Text />);
    expect(screen.getByTestId('text')).toHaveStyle({
      'font-size': '1.2rem',
    });
  });
});
