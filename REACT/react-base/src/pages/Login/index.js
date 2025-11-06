import React from 'react';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  toast.success('Sucesso!');
  toast.error('Erro!');
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
