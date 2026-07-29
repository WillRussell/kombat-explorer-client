import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './styles';

function ErrorMessage({ message }) {
  const classes = useStyles();
  return (
    <div className={classes.root} role="alert">
      <div className={classes.icon} aria-hidden="true">
        <ErrorOutlineIcon />
      </div>
      <Typography className={classes.title} variant="h6">
        Unable to load this content
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {message}
      </Typography>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default withTheme(ErrorMessage);
