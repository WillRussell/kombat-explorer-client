import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import EventIcon from '@material-ui/icons/Event';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PublicIcon from '@material-ui/icons/Public';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import RouterLink from '../../../router/RouterLink';
import useStyles from './styles';

function EventPopup({ event }) {
  const classes = useStyles();
  const { locationDetails } = event;

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title} variant="subtitle1">
          {event.title}
        </Typography>
        {event.subtitle && (
          <Typography className={classes.subtitle} variant="body2">
            {event.subtitle}
          </Typography>
        )}
      </div>

      {locationDetails && locationDetails.venue && (
        <div className={classes.detailRow}>
          <LocationOnIcon className={classes.detailIcon} />
          <Typography className={classes.detailText}>
            {locationDetails.venue}
          </Typography>
        </div>
      )}

      {locationDetails && locationDetails.shortLocation && (
        <div className={classes.detailRow}>
          <PublicIcon className={classes.detailIcon} />
          <Typography className={classes.detailText} color="textSecondary">
            {locationDetails.shortLocation}
          </Typography>
        </div>
      )}

      {event.unixDate && (
        <div className={classes.detailRow}>
          <EventIcon className={classes.detailIcon} />
          <Typography className={classes.detailText}>
            {moment(event.unixDate).format('dddd, MMMM D, YYYY')}
          </Typography>
        </div>
      )}

      <div className={classes.buttonWrapper}>
        <Button
          color="primary"
          component={RouterLink({
            pathname: `/fights/${event.id}`,
            state: { source: 'map' },
          })}
          disableElevation
          endIcon={<ArrowForward />}
          size="small"
          variant="contained"
          fullWidth
        >
          View Fight Card
        </Button>
      </div>
    </div>
  );
}

EventPopup.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    unixDate: PropTypes.number,
    locationDetails: PropTypes.shape({
      venue: PropTypes.string,
      shortLocation: PropTypes.string,
    }),
  }).isRequired,
};

export default EventPopup;
