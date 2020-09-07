import React, { useContext } from 'react';
import * as S from './styles';

import { Logo, Heading, Text, Input, Button, Spinner } from '../../components';
import useForm from '../../hooks/use-form/use-form';
import { UserContext } from '../../contexts/UserContext';

const Main = () => {
  const email = useForm('email');
  const password = useForm('password');

  const { userLogin, data, client, token, uid, loading, error } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value, '/home');
      email.setValue('');
      password.setValue('');
    }
  }

  return (
    <S.Wrapper data-testid="main">
      {loading && <Spinner />}
      <Logo />
      <Heading>BEM VINDO AO EMPRESAS</Heading>
      <Text>Lorem ipsum dolor sit amet, contetur adipiscing elit. Nunc accumsan.</Text>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="EMAIL"
          id="email"
          type="text"
          {...email}
          placeholder="EMAIL"
          isError={error}
        />
        <Input
          label="PASSWORD"
          id="password"
          type="text"
          {...password}
          isError={error}
          isLock
          placeholder="SENHA"
        />
        {error && <p id="errorMessage">Credenciais informadas são inválidas, tente novamente.</p>}
        <Button />
      </form>
    </S.Wrapper>
  );
};

export default Main;
