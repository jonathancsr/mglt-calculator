import React from 'react';
import {Switch, Route} from 'react-router-dom'


import Initial from "../pages/Initial";
import Result from "../pages/Result";

function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={Initial}/>
      <Route path="/dashboard" component={Result}/>
    </Switch>
  );
}

export default Routes;