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
import EventLocation from 'components/shared/EventLocation';
import LoadingCircle from 'components/shared/LoadingCircle';
import useFetchFightCard from 'hooks/useFetchFightCard';
import { get } from 'lodash';
import moment from 'moment';
import React from 'react';
import { useParams } from 'react-router-dom';

import RouterLink from '../../router/RouterLink';
import useStyles from './styles';

function FightCard() {
  const classes = useStyles();
  const { id } = useParams();
  const [{ fightCard, isLoading, isError }] = useFetchFightCard(id);
  const fights = get(fightCard, 'fights', []);

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
      <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={5}>
          <div className={classes.cardLeft}>
            { getFighterAvatar(item.fighterOne) }
          </div>
        </Grid>

        <Grid item xs={12} sm={2}>
          <div className={classes.cardMiddle}>
            <Typography variant="h4" color="textSecondary">
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
      <Container className={classes.buttonContainer} maxWidth="lg">
        <Button
          color="secondary"
          component={RouterLink('/')}
          size="large"
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
        <Container className={classes.paperWrapper} maxWidth="lg">
          <div>
            <Typography variant="h4">{fightCard.eventName}</Typography>
            <EventLocation
              location={fightCard.location}
            />
            <EventDate
              date={moment(fightCard.unixDate).format('dddd, MMMM Do, YYYY')}
            />
          </div>

          <div>
            <List>{listItems}</List>
          </div>
        </Container>
      )}
    </div>
  );
}

export default FightCard;
