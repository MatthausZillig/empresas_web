import React from 'react';
import * as S from './styles';
import { Lock, Email } from './Icons';

const Input = ({ id, label, value, type, onChange, error, onBlur, placeholder, isLock }) => (
  <S.Wrapper error={error}>
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
    {error && <p>!</p>}
  </S.Wrapper>
);

export default Input;
