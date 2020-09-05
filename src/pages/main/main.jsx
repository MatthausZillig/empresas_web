import React from 'react';
import * as S from './styles';

import { Logo, Heading, Text, Input, Button } from '../../components';

const Main = () => (
  <S.Wrapper>
    <Logo />
    <Heading>BEM VINDO AO EMPRESAS</Heading>
    <Text>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</Text>
    <Input />
    <Input isLock />
    <Button />
  </S.Wrapper>
);

export default Main;
