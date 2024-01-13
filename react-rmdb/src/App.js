import React from 'react';
//Components
import Header from './components/Header';
import Home from './components/Home';

//styles
import { GLobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GLobalStyle />
    </div>
  );
}

export default App;
