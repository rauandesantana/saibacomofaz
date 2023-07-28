import React from 'react';

import { Container, BoxContent } from '../../components/layout';
import AppBar from '../../components/app-bar';
import SliderImage from '../../components/slider-image'

const actions = [
  { title: 'Inicio', link: '/', status: 'selected'},
  { title: 'Cursos', link: '/cursos', status: 'default' },
  { title: 'Sobre', link: '/sobre', status: 'default' },
];

const Home = () => {
  return (
    <Container alignItems='center'>
      <BoxContent width='100%'>
        <AppBar actions={actions} />
        <SliderImage />
      </BoxContent>
    </Container>
  );
};

export default Home;