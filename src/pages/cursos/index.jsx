import React from 'react';

import { Container, BoxContent } from '../../components/layout';
import AppBar from '../../components/app-bar';

const actions = [
  { title: 'Inicio', link: '/', status: 'default'},
  { title: 'Cursos', link: '/cursos', status: 'selected' },
  { title: 'Sobre', link: '/sobre', status: 'default' },
];

const Home = () => {
  return (
    <Container alignItems='center'>
      <BoxContent width='100%'>
        <AppBar actions={actions} />
        ssdffsfsfsffsfs
      </BoxContent>
    </Container>
  );
};

export default Home;