import React, {useState} from 'react';

import GlobalStyles from './styles/global';
import Header from './components/Header';

import Dashboard from './pages/Dashboard';

function App() {
  const [toggle, setToggle] = useState(false);
  
  return (
    <>
      <GlobalStyles />
      <Header toggle={toggle} setToggle={setToggle} />
      <Dashboard toggled={toggle} />
    </>
  );
}

export default App;
