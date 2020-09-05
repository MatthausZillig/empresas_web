import React from 'react';
import { screen, getByRole, getByText, fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Button from './';

describe('Button Component', () => {
  test('Should be the a green button', () => {
    renderWithTheme(<Button />);
    expect(screen.getByRole('button')).toHaveStyle({
      background: '#57bbbc',
    });
  });
  test('Should be the a green button with the text enter', () => {
    renderWithTheme(<Button />);
    expect(screen.getByText(/entrar/i));
  });

  test('Should be has the click event', () => {
    renderWithTheme(<Button />);
    fireEvent.click(screen.getByText(/entrar/i));
  });
});
