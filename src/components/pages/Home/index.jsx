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
        gutterBottom
        variant="h1"
      >
        Hello World
      </Typography>

      <Button
        color="primary"
        component={RouterLink('/about')}
        endIcon={<ArrowForward />}
        size="large"
        variant="outlined"
      >
        More Info
      </Button>

    </div>
  );
}

export default Home;
