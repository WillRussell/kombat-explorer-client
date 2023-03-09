import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PublicIcon from '@material-ui/icons/Public';
import { isEmpty, isNull } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './styles';

function EventLocation({ location }) {
  const classes = useStyles();

  const hasLocation = !isNull(location) && !isEmpty(location);

  return hasLocation && (
  <div className={classes.root}>
    <PublicIcon className={classes.icon} />
    <Typography>{location}</Typography>
  </div>
  );
}
EventLocation.propTypes = {
  location: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

EventLocation.defaultProps = {
  location: '--',
};

export default withTheme(EventLocation);
