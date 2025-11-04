import React from 'react';
import GlobalStyle from './styles/GlobalStyles';

import Login from './pages/Login';
import Header from './components/Header/';

function App() {
  return (
    <>
      <Header />
      <Login />
      <GlobalStyle />
    </>
  );
}

export default App;
