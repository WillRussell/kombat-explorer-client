import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EventIcon from '@material-ui/icons/Event';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './styles';

function EventDate({ date }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <EventIcon className={classes.icon} />
      <Typography>{date}</Typography>
    </div>
  );
}

EventDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default withTheme(EventDate);
