import React from 'react';
import * as S from './styles';

const Spinner = () => {
  return (
    <>
      <S.Spinner data-testid="spinner"></S.Spinner>
      <S.Overlay />
    </>
  );
};

export default Spinner;
