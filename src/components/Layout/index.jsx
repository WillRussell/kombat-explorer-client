import { withTheme } from '@material-ui/core/styles';
import TopNav from 'components/TopNav';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FightCard from '../../pages/FightCard';
import Home from '../../pages/Home';
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
          <Route
            path="/fights/:id"
            render={(props) => <FightCard {...props} />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default withTheme(Layout);
