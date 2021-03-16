import React from 'react';
import {View} from 'react-native'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import List from '../scenes/logged/customers/list';  
import Create from '../scenes/logged/customers/create';
import Edit from '../scenes/logged/customers/edit';
import Login from '../scenes/auth/login';
import Middleware from './middleware';

/**
 * Componente que establece el sistema de navegacion.
 */
const Navigation = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <Middleware><List/></Middleware>
            </Route>
            <Route exact path="/customer">
                <Middleware><Create/></Middleware>
            </Route>
            <Route exact path="/customer/:id">
                <Middleware><Edit/></Middleware>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
        </Switch>
    </Router>
);

  export default Navigation;