import React from 'react'
import { Route, Switch } from "react-router-dom"
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import BlogsPage from './Pages/BlogsPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';

function Routing() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/about" exact>
        <AboutPage />
      </Route>
      <Route path="/resume" exact>
        <ResumePage />
      </Route>
      <Route path="/portfolios" exact>
        <PortfoliosPage />
      </Route>
      <Route path="/blogs" exact>
        <BlogsPage />
      </Route>
      <Route path="/contact" exact>
        <ContactPage />
      </Route>
    </Switch>
  )
}

export default Routing;
