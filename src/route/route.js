import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookPage from '../screen/book';
import Home from '../screen/home';
import Contact from '../screen/contact';
import Services from '../screen/services';
import About from '../screen/about'

export default function MyRoute() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/book" component={BookPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
    </Router>
  );
}
