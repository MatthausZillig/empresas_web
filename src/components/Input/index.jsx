import React from 'react';
import * as S from './styles';
import { Lock, Email } from './Icons';

import { UserContext } from '../../contexts/UserContext';

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  isError,
  onBlur,
  placeholder,
  isLock,
}) => {
  return (
    <S.Wrapper error={error} isError={isError}>
      {isLock ? <Lock /> : <Email />}
      <input
        id={id}
        type={type}
        label={label}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && error}
      {isError ? <p>!</p> : null}
    </S.Wrapper>
  );
};

export default Input;
