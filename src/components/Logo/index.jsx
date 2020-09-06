import React from 'react';

import * as S from './styles';

import IoasysLogo from '../../../static/logo-home.png';
import IoasysLogo2x from '../../../static/logo-home@2x.png';
import IoasysLogo3x from '../../../static/logo-home@3x.png';
import IoasysLogoWhite from '../../../static/logo-nav.png';
import IoasysLogo2xWhite from '../../../static/logo-nav@2x.png';
import IoasysLogo3xWhite from '../../../static/logo-nav@3x.png';

const Logo = ({ white }) => {
  return (
    <>
      {!white ? (
        <S.Logo
          data-testid="logo"
          src={IoasysLogo}
          srcSet={(IoasysLogo2x, IoasysLogo3x)}
          alt="Logo Ioasys, escrito ioasys e do lado direito um circulo com um semi circulo por volta"
          title="ioasys"
        />
      ) : (
        <S.Logo
          white
          data-testid="logo-white"
          src={IoasysLogoWhite}
          srcSet={(IoasysLogo2xWhite, IoasysLogo3xWhite)}
          alt="Logo Ioasys, escrito ioasys e do lado direito um circulo com um semi circulo por volta"
          title="ioasys"
        />
      )}
    </>
  );
};

export default Logo;
