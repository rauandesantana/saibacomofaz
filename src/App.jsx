import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from './pages/home';
import Cursos from './pages/cursos';
import Sobre from './pages/sobre';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <Home /> } path="/" />
        <Route element={ <Cursos /> } path="/cursos" />
        <Route element={ <Sobre /> } path="/sobre" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;