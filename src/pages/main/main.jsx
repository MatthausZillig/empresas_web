import React from 'react';
import * as S from './styles';

import Logo from '../../components/Logo/index';
import Heading from '../../components/Heading/index';
import Text from '../../components/Text/index';
import Input from '../../components/Input/index';

const Main = () => (
  <S.Wrapper>
    <Logo />
    <Heading>BEM VINDO AO EMPRESAS</Heading>
    <Text>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</Text>
    <Input />
  </S.Wrapper>
);

export default Main;
