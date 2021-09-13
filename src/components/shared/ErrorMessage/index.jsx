import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './styles';

function ErrorMessage({ message }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <WarningIcon
        className={classes.icon}
        color="error"
        fontSize="large"
      />
      <Typography>{message}</Typography>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default withTheme(ErrorMessage);
