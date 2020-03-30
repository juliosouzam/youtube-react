import React from 'react';

import GlobalStyles from './styles/global';
import Header from './components/Header';

import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
