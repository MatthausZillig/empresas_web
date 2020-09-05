import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Input from './index';

describe('Input Component', () => {
  test('Should be a input', () => {
    renderWithTheme(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
  test('Should be a email input by default', () => {
    renderWithTheme(<Input />);
    expect(screen.getByTestId('icon-email')).toBeInTheDocument();
  });
  test('Should be a password input with islock is passed', () => {
    renderWithTheme(<Input isLock />);
    expect(screen.getByTestId('icon-lock')).toBeInTheDocument();
  });
});
