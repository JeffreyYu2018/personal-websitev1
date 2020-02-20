import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './styles';
import './scripts';
import IndexController from './controllers/IndexController';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexController} />
      <Route exact path="/index.html" component={IndexController} />
      <Route exact path="/contact.html" component={ContactView} />
      <Route exact path="/about.html" component={AboutView} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
