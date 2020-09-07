import React from 'react';
import * as S from './styles';

const Spinner = ({ lazy }) => {
  return (
    <>
      <S.Spinner data-testid="spinner"></S.Spinner>
      {lazy && <S.Overlay />}
    </>
  );
};

export default Spinner;
