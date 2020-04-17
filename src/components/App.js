/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'moment-timezone';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layouts/Header';
// import Home from './pages/Home';

import Footer from './layouts/Footer';

const App = () => (
  <BrowserRouter>
    <Header />
    <ToastContainer />
    <Switch>{/* <Route exact path="/" component={Home} /> */}</Switch>
    <Footer />
  </BrowserRouter>
);

const mapStateToProps = ({ books }) => ({
  books,
});
export default connect(mapStateToProps)(App);
