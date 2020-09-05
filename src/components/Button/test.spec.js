import React from 'react';
import 'jest-styled-components';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Button from './';

describe('Button Component', () => {
  test('Should be render a button', () => {
    renderWithTheme(<Button />);
    expect(screen.getByRole('button'));
  });
  test('Should be render a button with the text enter', () => {
    renderWithTheme(<Button />);
    expect(screen.getByText(/entrar/i)).toBeInTheDocument();
  });

  test('Should be has the click event', () => {
    renderWithTheme(<Button />);
    fireEvent.click(screen.getByText(/entrar/i));
  });
});
