import { withTheme } from '@material-ui/core/styles';
import About from 'components/pages/About';
import Home from 'components/pages/Home';
import TopNav from 'components/TopNav';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import useStyles from './styles';

function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <TopNav />
      <main className={classes.pageContent}>
        <div className={classes.buffer} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default withTheme(Layout);
