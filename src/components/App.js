import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './Header';
import Home from '../pages/Home';
import Page from '../pages/Page';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page">
          <Page />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
