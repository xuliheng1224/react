import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from '../module/views/test';

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Test} />
    </Switch>
  </BrowserRouter>
);
export default BasicRoute;