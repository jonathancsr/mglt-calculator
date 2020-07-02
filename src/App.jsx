import React from 'react';

import GlobalStyle from "./styles/global";

import {StarshipProvider} from './context/StarshipsContext'

import Initial from './pages/Initial'
import Result from './pages/Result'

function App() {
  return(
    <>
      <StarshipProvider>
        <Initial/>
        <Result/>
      </StarshipProvider>
      <GlobalStyle/>
    </>
  );
};

export default App;