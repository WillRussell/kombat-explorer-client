import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ErrorMessage from 'components/shared/ErrorMessage';
import EventDate from 'components/shared/EventDate';
import EventLocation from 'components/shared/EventLocation';
import LoadingCircle from 'components/shared/LoadingCircle';
import useFetchEvents from 'hooks/useFetchEvents';
import moment from 'moment';
import React from 'react';

import RouterLink from '../../router/RouterLink';
import useStyles from './styles';

function Home() {
  const classes = useStyles();
  const [{ eventsCollection, isLoading, isError }] = useFetchEvents();

  const listItems = eventsCollection.map((item) => (
    <Paper className={classes.eventCard} key={item.id} elevation={3}>
      <div className={classes.cardLeft}>
        <Typography component="h1" variant="h4">
          {item.title}
          {' '}
          -
          {item.subtitle}
        </Typography>
        <EventLocation location={item.location} />
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

  return (
    <div className={classes.root}>
      {isLoading && <LoadingCircle />}

      {isError && (
        <ErrorMessage message="There was an error fetching the events collection." />
      )}

      {eventsCollection.length > 0 && (
        <Container className={classes.paperWrapper} maxWidth="lg">
          <div>
            <List>{listItems}</List>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Home;
