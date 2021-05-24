import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import WhoDeliv from './pages/whoDeliv'
import WhatDeliv from './pages/whatDeliv'

function AppRoutes() {

  return (
    <Router>
        <Switch>
          <Route path="/whoDeliv" component={WhoDeliv} /> 
          <Route path="/whatDeliv" component={WhatDeliv} />     
        </Switch>
    </Router>        
  );
}

export default AppRoutes;
