import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LocationIcon from '@material-ui/icons/LocationOn';
import { isNull } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './styles';

function EventVenue({ venue }) {
  const classes = useStyles();

  return !isNull(venue) && (
  <div className={classes.root}>
    <LocationIcon className={classes.icon} />
    <Typography>{venue}</Typography>
  </div>
  );
}
EventVenue.propTypes = {
  venue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

EventVenue.defaultProps = {
  venue: '--',
};

export default withTheme(EventVenue);
