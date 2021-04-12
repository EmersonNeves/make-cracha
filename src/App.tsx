import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';
import Listagem from './pages/Listagem';

function App() {
  return (
    <div style={{margin: 0}}>
    <BrowserRouter>
      <Route component={Home} path="/" exact></Route>
      <Route component={Cadastro} path="/cadastro"></Route>
      <Route component={Listagem} path="/listagem"></Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
