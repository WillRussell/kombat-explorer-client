import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import React from 'react';
import RouterLink from 'router/RouterLink';

import useStyles from './styles';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography
        className={classes.title}
        component="h1"
        variant="h3"
      >
        Hello World
      </Typography>

      <Typography
        className={classes.subtitle}
        color="textSecondary"
        variant="caption"
      >
        A web app to bootstrap your next React + Material-UI project!
      </Typography>

      <div>
        <Button
          className={classes.buttonLink}
          color="primary"
          href="https://github.com/WillRussell/React-Material-Starter"
          size="large"
          variant="outlined"
        >
          Source Code
        </Button>
        <Button
          className={classes.buttonLink}
          color="primary"
          component={RouterLink('/about')}
          endIcon={<ArrowForward />}
          size="large"
          variant="outlined"
        >
          More Info
        </Button>
      </div>

    </div>
  );
}

export default Home;
