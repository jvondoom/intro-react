import React from 'react';

import Header from './components/Header';
import Influence from './components/Influence';
import Resume from './components/Resume';

function App() {
  const style = {
    backgroundColor: '#6E0902',
    color: '#9c9c9c',
  };

  return (
    <div className="App" style={style}>
      <Header />
      <Influence />
      <Resume />
    </div>
  );
}

export default App;
