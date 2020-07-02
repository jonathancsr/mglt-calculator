import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom'

import GlobalStyle from "./styles/global";

import {StarshipProvider} from './context/StarshipsContext';

import Routes from './routes';

function App() {
  return(
    <Router>
      <StarshipProvider>
        <Routes/>
      </StarshipProvider>
      <GlobalStyle/>
    </Router>
  );
};

export default App;