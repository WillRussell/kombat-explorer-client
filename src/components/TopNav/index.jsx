import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ThemeToggle from 'components/ThemeToggle';
import React from 'react';

import useStyles from './styles';

function TopNav() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} elevation={2} position="fixed">
      <Toolbar>
        <Typography className={classes.grow} noWrap variant="h6">
          Kombat Explorer
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
