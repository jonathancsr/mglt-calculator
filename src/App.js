import React from 'react';

import GlobalStyle from "./styles/global";
import GlobalFonts from "./styles/globalFonts";

import Initial from './pages/Initial'

function App() {
  return(
    <>
      <Initial/>
      <GlobalStyle/>
      <GlobalFonts/>
    </>
  );
};

export default App;
