import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import SearchOff from '@material-ui/icons/SearchOutlined';
import ErrorMessage from 'components/shared/ErrorMessage';
import EventDate from 'components/shared/EventDate';
import EventLocation from 'components/shared/EventLocation';
import EventVenue from 'components/shared/EventVenue';
import FilterSearchbar from 'components/shared/FilterSearchbar';
import LoadingCircle from 'components/shared/LoadingCircle';
import RawDataView from 'components/shared/RawDataView';
import RawToggleSwitch from 'components/shared/RawToggleSwitch';
import useFetchEvents from 'hooks/useFetchEvents';
import { isEmpty } from 'lodash';
import moment from 'moment';
import React, { useState } from 'react';

import RouterLink from '../../router/RouterLink';
import filterSearch from '../../support/viewHelpers';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  const [searchInput, setInput] = useState();
  const [isRaw, setIsRaw] = useState(false);
  const [{ eventsCollection, isLoading, isError }] = useFetchEvents();

  const disableInputs = isLoading || isError;
  const filteredCollection = filterSearch(eventsCollection, searchInput);
  const eventDates = filteredCollection
    .map((event) => moment(event.unixDate))
    .filter((date) => date.isValid());
  const earliestEventDate = eventDates.length > 0
    ? moment.min(eventDates).format('MMM D, YYYY')
    : null;
  const latestEventDate = eventDates.length > 0
    ? moment.max(eventDates).format('MMM D, YYYY')
    : null;

  const listItems = filteredCollection.map((item) => (
    <Paper className={classes.eventCard} key={item.id} elevation={0}>
      <div className={classes.cardContent}>
        <div className={classes.cardHeader}>
          <div className={classes.cardHeading}>
            <Typography className={classes.cardTitle} component="h2" variant="h5">
              {item.title}
            </Typography>
            <Typography className={classes.cardSubtitle} variant="body1">
              {item.subtitle}
            </Typography>
          </div>
          <Button
            className={classes.viewButton}
            color="primary"
            component={RouterLink({
              pathname: `/fights/${item.id}`,
              state: { source: 'events' },
            })}
            disableElevation
            endIcon={<ArrowForward />}
            size="medium"
            variant="contained"
          >
            View Event
          </Button>
        </div>

        <EventVenue venue={item.locationDetails.venue} />
        <EventLocation location={item.locationDetails.shortLocation} />
        <EventDate
          date={`${moment(item.unixDate).format('dddd')}, ${moment(
            item.unixDate,
          ).format('LL')}`}
        />
      </div>
    </Paper>
  ));

  const activeContent = () => {
    if (isLoading) {
      return <LoadingCircle />;
    }

    if (isError) {
      return (
        <ErrorMessage message="There was an error fetching the events collection." />
      );
    }

    if (isRaw) {
      return (
        <Container maxWidth="lg">
          <RawDataView data={filteredCollection} />
        </Container>
      );
    }

    if (!isEmpty(filteredCollection)) {
      return (
        <Container maxWidth="lg">
          <div className={classes.eventsGrid}>{listItems}</div>
        </Container>
      );
    }

    return (
      <div className={classes.noResults}>
        <SearchOff className={classes.noResultsIcon} />
        <Typography variant="h6">No events found</Typography>
        <Typography variant="body2" color="textSecondary">
          Try adjusting your search terms
        </Typography>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.pageHeader}>
          <div>
            <Typography className={classes.eyebrow} component="p" variant="overline">
              Fight calendar
            </Typography>
            <Typography className={classes.pageTitle} component="h1" variant="h4">
              Upcoming events
            </Typography>
            <Typography color="textSecondary" variant="body1">
              Browse boxing and MMA cards around the world.
            </Typography>
          </div>
          {eventsCollection.length > 0 && (
            <div className={classes.headerSummary}>
              <Typography className={classes.eventCount} color="textSecondary" variant="body2">
                {`${filteredCollection.length} ${filteredCollection.length === 1 ? 'event' : 'events'}`}
              </Typography>
              {earliestEventDate && latestEventDate && (
                <Typography className={classes.dateRange} component="p" variant="body2">
                  {earliestEventDate === latestEventDate
                    ? earliestEventDate
                    : `${earliestEventDate} – ${latestEventDate}`}
                </Typography>
              )}
            </div>
          )}
        </div>

        {eventsCollection.length > 0 && (
          <div className={classes.titleArea}>
            <div className={classes.titleActions}>
              <FilterSearchbar disabled={disableInputs} setInput={setInput} />
              <RawToggleSwitch
                isRaw={isRaw}
                setIsRaw={setIsRaw}
                disabled={disableInputs}
              />
            </div>
          </div>
        )}
      </Container>

      {activeContent()}
    </div>
  );
}

export default Home;
