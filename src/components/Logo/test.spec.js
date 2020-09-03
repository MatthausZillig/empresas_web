import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Logo from './index';

describe('<Logo />', () => {
  it('should render a img', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
