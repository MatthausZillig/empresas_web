import React from 'react';
import * as S from './styles';
import IoasysLogo from '../../../static/logo-home.png';
import IoasysLogo2x from '../../../static/logo-home@2x.png';
import IoasysLogo3x from '../../../static/logo-home@3x.png';

const Logo = () => (
  <S.Logo
    src={IoasysLogo}
    srcSet={(IoasysLogo2x, IoasysLogo3x)}
    alt="Logo Ioasys, escrito ioasys e do lado direito um circulo com um semi circulo por volta"
    title="ioasys"
  />
);

export default Logo;
