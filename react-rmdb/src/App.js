import React from 'react';
//Routing
import { BroserRouter as Router, Routes, Route} from 'react-router-dom';
//Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//styles
import { GLobalStyle } from './GlobalStyle';

const App = () => (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*'  element={<NotFound />} />
      </Routes>
      <Home />
      <GLobalStyle />
    </Router>
  );


export default App;
