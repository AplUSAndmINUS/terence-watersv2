import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from '../screens/about';
import Blog from '../screens/blog';
import Contact from '../screens/contact';
import Home from '../screens/home';
import Intro from '../screens/intro';
import Page404 from '../screens/404';
import Portfolio from '../screens/portfolio';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/blog" exact component={Blog} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/intro" exact component={Intro} />
      <Route path="/portfolio" exact component={Portfolio} />
      <Route component={Home} />
    </Switch>
  )
}