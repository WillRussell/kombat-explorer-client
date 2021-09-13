import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

import useStyles from './styles';

function LoadingCircle() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
}

export default LoadingCircle;
