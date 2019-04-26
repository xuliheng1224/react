import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import routes from "./routes";

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      {
        routes.map(route => (
          <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
        ))
      }
    </Switch>
  </BrowserRouter>
);
export default BasicRoute;