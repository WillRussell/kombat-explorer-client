import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ThemeToggle from 'components/ThemeToggle';
import React from 'react';

import useStyles from './styles';

function TopNav() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} elevation={0} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography className={`${classes.grow} ${classes.brandText}`} noWrap variant="h6">
          <span className={classes.brandAccent}>Kombat</span>
          {' '}
          Explorer
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
