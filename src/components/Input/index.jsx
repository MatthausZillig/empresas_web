import React from 'react';
import * as S from './styles';
import { Lock, Email } from './Icons';

const Input = ({ isLock, label, type, id, placeholder, onChange }) => (
  <S.Wrapper>
    {isLock ? <Lock /> : <Email />}
    <input id={id} type={type} label={label} placeholder={placeholder} onChange={onChange} />
  </S.Wrapper>
);

export default Input;
