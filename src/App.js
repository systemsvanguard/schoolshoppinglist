import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home         from './pages/Home';
import About        from './pages/About';
import Contact      from './pages/Contact';
import Services     from './pages/Services';
import NotFound     from './pages/NotFound';
import SiteHeader   from './pages/SiteHeader';
import SiteFooter   from './pages/SiteFooter';

function App() {
  return (
    <Router>
      <div className="App">
          <SiteHeader />
          <br /><br />
          <Switch>
            <Route component={Home}     path="/" exact />
            <Route component={Services} path="/services" exact />
            <Route component={About}    path="/about" exact />
            <Route component={Contact}  path="/contact" exact />
            <Route component={NotFound}  />
          </Switch>
          <SiteFooter />
      </div>
    </Router>
  );
}

export default App;
