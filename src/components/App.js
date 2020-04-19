/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'moment-timezone';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/css/style.css';

import Home from './pages/Home';

const App = () => (
  <BrowserRouter>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:bookId" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
