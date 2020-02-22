import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './styles';
import './scripts';
import IndexController from './controllers/IndexController';
import AboutController from './controllers/AboutController';
import ContactController from './controllers/ContactController';
import BlogController from './controllers/BlogController';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={IndexController} />
      <Route exact path="/index.html" component={IndexController} />
      <Route exact path="contact" component={ContactController} />
      <Route exact path="/contact.html" component={ContactController} />
      <Route exact path="/about" component={AboutController} />
      <Route exact path="/about.html" component={AboutController} />
      <Route exact path="/blog" component={BlogController} />
      <Route exact path="/blog.html" component={BlogController} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
