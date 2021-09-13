import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LocationIcon from '@material-ui/icons/LocationOn';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './styles';

function EventLocation({ location, isBold }) {
  const classes = useStyles();

  const iconStyle = isBold ? classes.altIcon : classes.icon;
  const textStyle = isBold ? classes.altText : classes.text;

  return (
    <div className={classes.root}>
      <LocationIcon className={iconStyle} />
      <Typography className={textStyle}>{location}</Typography>
    </div>
  );
}

EventLocation.propTypes = {
  location: PropTypes.string,
  isBold: PropTypes.bool,
};

EventLocation.defaultProps = {
  location: '--',
  isBold: false,
};

export default withTheme(EventLocation);
