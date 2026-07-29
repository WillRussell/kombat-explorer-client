import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

import RouterLink from '../../../router/RouterLink';
import useStyles from './styles';

function EventGroupPopup({ events }) {
  const classes = useStyles();
  const uniqueLocations = [...new Set(events
    .map((event) => event.locationDetails.shortLocation)
    .filter(Boolean))];
  const uniqueCountries = [...new Set(events
    .map((event) => event.locationDetails.country)
    .filter(Boolean))];
  const isApproximateLocation = uniqueLocations.length > 1;
  const location = isApproximateLocation && uniqueCountries.length === 1
    ? uniqueCountries[0]
    : uniqueLocations[0] || 'Multiple locations';

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.eyebrow} variant="caption">
          {`${events.length} events`}
        </Typography>
        <Typography className={classes.location} variant="subtitle1">
          {location}
        </Typography>
        {isApproximateLocation && (
          <Typography className={classes.locationNote} variant="caption">
            Approximate map point
          </Typography>
        )}
      </div>

      <div className={classes.eventList}>
        {events.map((event) => (
          <Button
            className={classes.eventButton}
            component={RouterLink({
              pathname: `/fights/${event.id}`,
              state: { source: 'map' },
            })}
            endIcon={<ArrowForward />}
            key={event.id}
          >
            <span className={classes.eventText}>
              <span className={classes.eventTitle}>{event.title}</span>
              <span className={classes.eventDate}>
                {moment(event.unixDate).format('MMM D, YYYY')}
              </span>
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}

EventGroupPopup.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    unixDate: PropTypes.number.isRequired,
    locationDetails: PropTypes.shape({
      country: PropTypes.string,
      shortLocation: PropTypes.string,
    }).isRequired,
  })).isRequired,
};

export default EventGroupPopup;
