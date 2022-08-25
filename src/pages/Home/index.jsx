import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ErrorMessage from 'components/shared/ErrorMessage';
import EventDate from 'components/shared/EventDate';
import EventLocation from 'components/shared/EventLocation';
import EventVenue from 'components/shared/EventVenue';
import FilterSearchbar from 'components/shared/FilterSearchbar';
import LoadingCircle from 'components/shared/LoadingCircle';
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
  const [{ eventsCollection, isLoading, isError }] = useFetchEvents();

  const disableInputs = isLoading || isError;
  const filteredCollection = filterSearch(eventsCollection, searchInput);

  const listItems = filteredCollection.map((item) => (
    <Paper className={classes.eventCard} key={item.id} elevation={3}>
      <div className={classes.cardLeft}>
        <Typography component="h1" variant="h4">
          {item.title}
          {' - '}
          {item.subtitle}
        </Typography>
        <EventVenue venue={item.locationDetails.venue} />
        <EventLocation location={item.locationDetails.shortLocation} />
        <EventDate
          date={`${moment(item.unixDate).format('dddd')}, ${moment(
            item.unixDate,
          ).format('LL')}`}
        />
      </div>

      <div className={classes.cardRight}>
        <Button
          color="secondary"
          component={RouterLink(`/fights/${item.id}`)}
          endIcon={<ArrowForward />}
          size="large"
          variant="outlined"
        >
          View Event
        </Button>
      </div>
    </Paper>
  ));

  const activeContent = () => {
    if (!isEmpty(filteredCollection)) {
      return (
        <Container className={classes.paperWrapper} maxWidth="lg">
          <div>
            <List>{listItems}</List>
          </div>
        </Container>
      );
    }

    return <ErrorMessage message="No events found!" />;
  };

  return (
    <div className={classes.root}>
      {isLoading && <LoadingCircle />}

      {isError && (
        <ErrorMessage message="There was an error fetching the events collection." />
      )}

      {eventsCollection.length > 0 && (
        <Container className={classes.paperWrapper} maxWidth="lg">
          <FilterSearchbar disabled={disableInputs} setInput={setInput} />
          { activeContent() }
        </Container>
      )}
    </div>
  );
}

export default Home;
