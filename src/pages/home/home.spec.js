import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Home from './home';

describe('Home Component', () => {
  test('Should start correctly', () => {
    renderWithTheme(<Home />);
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
