import React from 'react';
import * as S from './styles';

import { UserContext } from '../../contexts/UserContext';
import Logo from '../Logo/index';

const Header = () => {
  const { data } = React.useContext(UserContext);
  if (!data) {
    return null;
  }
  return (
    <S.Wrapper>
      <Logo white />
    </S.Wrapper>
  );
};

export default Header;
