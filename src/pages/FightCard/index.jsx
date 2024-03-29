import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import PersonIcon from '@material-ui/icons/Person';
import ErrorMessage from 'components/shared/ErrorMessage';
import EventDate from 'components/shared/EventDate';
import EventVenue from 'components/shared/EventVenue';
import LoadingCircle from 'components/shared/LoadingCircle';
import RawDataView from 'components/shared/RawDataView';
import RawToggleSwitch from 'components/shared/RawToggleSwitch';
import useFetchFightCard from 'hooks/useFetchFightCard';
import { get } from 'lodash';
import moment from 'moment';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import RouterLink from '../../router/RouterLink';
import useStyles from './styles';

function FightCard() {
  const classes = useStyles();
  const { id } = useParams();
  const [isRaw, setIsRaw] = useState(false);
  const [{ fightCard, isLoading, isError }] = useFetchFightCard(id);
  const fights = get(fightCard, 'fights', []);

  // TODO: handle this check the server instead of the client
  const hasMainEvent = fights.length >= 1
  && Object.values(fights[0].fighterOne).every((val) => val !== '')
  && Object.values(fights[0].fighterTwo).every((val) => val !== '');

  const getFighterAvatar = (fighter) => (
    <div className={classes.avatarSection}>
      <Avatar>
        <PersonIcon />
      </Avatar>
      <div className={classes.fighterinfo}>
        <Typography variant="h5">{fighter.name}</Typography>
        <Typography variant="caption">{fighter.record}</Typography>
      </div>
    </div>
  );

  const listItems = fights.map((item) => (
    <Paper
      className={classes.fightContainer}
      key={item.fightName}
      elevation={3}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={5}>
          <div className={classes.cardLeft}>
            { getFighterAvatar(item.fighterOne) }
          </div>
        </Grid>

        <Grid item xs={12} sm={2}>
          <div className={classes.cardMiddle}>
            <Typography variant="h5" color="textSecondary">
              VS
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={5}>
          <div className={classes.cardRight}>
            { getFighterAvatar(item.fighterTwo) }
          </div>
        </Grid>
      </Grid>
    </Paper>
  ));

  return (
    <div className={classes.root}>
      <Container className={classes.buttonContainer} maxWidth="md">
        <Button
          color="secondary"
          component={RouterLink('/')}
          startIcon={<ArrowBack />}
          variant="outlined"
        >
          Events List
        </Button>
      </Container>

      {isLoading && <LoadingCircle />}

      {isError && (
        <ErrorMessage message="There was an error fetching the fight card." />
      )}

      {fights.length > 0 && (
        <Container className={classes.paperWrapper} maxWidth="md">
          <div className={classes.headerContainer}>
            <div>
              <Typography variant="h5">{fightCard.eventName}</Typography>
              <EventVenue venue={fightCard.location} />
              <EventDate
                date={moment(fightCard.unixDate).format('dddd, MMMM Do, YYYY')}
              />
            </div>
            <div>
              <RawToggleSwitch
                isRaw={isRaw}
                setIsRaw={setIsRaw}
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            {isRaw && <RawDataView data={fights} />}
            {!isRaw && hasMainEvent && <List>{listItems}</List>}
            {!isRaw && !hasMainEvent && <ErrorMessage message="This card doesn't have a main event yet." />}
          </div>
        </Container>
      )}
    </div>
  );
}

export default FightCard;
