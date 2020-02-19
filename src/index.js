import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './styles';
import './scripts';
import IndexView from './views/IndexView';
import AboutView from './views/AboutView';
import ContactFormView from './views/ContactFormView';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexView} />
      <Route exact path="/contact.html" component={ContactFormView} />
      <Route exact path="/about.html" component={AboutView} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
