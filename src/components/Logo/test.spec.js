import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Logo from './index';

describe('<Logo />', () => {
  it('should render a logo', () => {
    renderWithTheme(<Logo />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });
  it('should render a white logo if the white propertie is passed', () => {
    renderWithTheme(<Logo white />);
    expect(screen.getByTestId('logo-white')).toBeInTheDocument();
  });
});
