import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './shared_modules/header/header';
import Component1 from './components/component1/component1';
import Component2 from './components/component2/component2';

// include scss
import './shared_styles/base.scss';

// define routes
const Routes = (() =>
  <BrowserRouter>
    <div id="app-container">
      <Route path="/" component={() => <Header />} />
      <Route exact path="/" component={() => <Component1 />} />
      <Route path="/component-2" component={() => <Component2 />} />
    </div>
  </BrowserRouter>
);

export default Routes;
