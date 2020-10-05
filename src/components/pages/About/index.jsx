import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import React from 'react';
import RouterLink from 'router/RouterLink';

import useStyles from './styles';

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Typography
        className={classes.title}
        component="h1"
        variant="h3"
      >
        About Page
      </Typography>

      <Typography
        className={classes.subtitle}
        color="textSecondary"
        variant="caption"
      >
        Projects Details...
      </Typography>

      <Button
        color="primary"
        component={RouterLink('/')}
        size="large"
        startIcon={<ArrowBack />}
        variant="outlined"
      >
        Back
      </Button>

    </div>
  );
}

export default About;
