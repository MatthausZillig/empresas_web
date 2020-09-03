import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../utils/test/helpers';
import Logo from './index';

const makeSut = () => {
  renderWithTheme(<Logo />);
};

describe('Logo Component', () => {
  test('Should be the test describe', () => {
    // TODO:
  });
});
