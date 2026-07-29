import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './styles';

function LoadingCircle({ label }) {
  const classes = useStyles();
  const placeholders = ['primary', 'secondary'];

  return (
    <div
      aria-busy="true"
      aria-label={label}
      className={classes.container}
      role="status"
    >
      <div className={classes.status}>
        <CircularProgress size={18} thickness={4.5} />
        <Typography color="textSecondary" variant="body2">
          {label}
        </Typography>
      </div>
      <div className={classes.skeletonGrid} aria-hidden="true">
        {placeholders.map((placeholder) => (
          <div className={classes.skeletonCard} key={placeholder}>
            <span className={`${classes.skeletonLine} ${classes.skeletonLineShort}`} />
            <span className={`${classes.skeletonLine} ${classes.skeletonLineTitle}`} />
            <span className={classes.skeletonLine} />
            <span className={`${classes.skeletonLine} ${classes.skeletonLineMedium}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

LoadingCircle.defaultProps = {
  label: 'Loading content',
};

LoadingCircle.propTypes = {
  label: PropTypes.string,
};

export default LoadingCircle;
