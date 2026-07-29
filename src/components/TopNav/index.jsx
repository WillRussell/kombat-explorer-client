import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MapIcon from '@material-ui/icons/Map';
import ViewListIcon from '@material-ui/icons/ViewList';
import ThemeToggle from 'components/ThemeToggle';
import React from 'react';
import { useLocation } from 'react-router-dom';

import RouterLink from '../../router/RouterLink';
import useStyles from './styles';

function TopNav() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <AppBar className={classes.appBar} elevation={0} position="sticky">
      <Toolbar className={classes.toolbar}>
        <a
          aria-label="Kombat Explorer home"
          className={classes.brand}
          href="/"
        >
          <div className={classes.brandMark} aria-hidden="true">K</div>
          <Typography className={`${classes.grow} ${classes.brandText}`} noWrap variant="h6">
            Kombat Explorer
          </Typography>
        </a>
        <div className={classes.navLinks}>
          <Button
            className={`${classes.navLink} ${location.pathname === '/' ? classes.navLinkActive : ''}`}
            component={RouterLink('/')}
            startIcon={<ViewListIcon className={classes.navIcon} />}
          >
            Events
          </Button>
          <Button
            className={`${classes.navLink} ${location.pathname === '/map' ? classes.navLinkActive : ''}`}
            component={RouterLink('/map')}
            startIcon={<MapIcon className={classes.navIcon} />}
          >
            Map
          </Button>
        </div>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}

export default TopNav;
