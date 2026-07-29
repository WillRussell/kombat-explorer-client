import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowBack from '@material-ui/icons/ArrowBack';
import PersonIcon from '@material-ui/icons/Person';
import SportsMmaIcon from '@material-ui/icons/SportsMma';
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
import { useLocation, useParams } from 'react-router-dom';

import RouterLink from '../../router/RouterLink';
import useStyles from './styles';

const isAnnouncedFight = (fight) => (
  get(fight, 'fighterOne.name', '').trim() !== ''
  && get(fight, 'fighterTwo.name', '').trim() !== ''
);

function FightCard() {
  const classes = useStyles();
  const { id } = useParams();
  const location = useLocation();
  const [isRaw, setIsRaw] = useState(false);
  const [{ fightCard, isLoading, isError }] = useFetchFightCard(id);
  const fights = get(fightCard, 'fights', []);
  const cameFromMap = get(location, 'state.source') === 'map';
  const backDestination = cameFromMap ? '/map' : '/';
  const backLabel = cameFromMap ? 'Back to map' : 'Back to events';
  const hasFightCard = Object.keys(fightCard).length > 0;
  const announcedFights = fights.filter(isAnnouncedFight);

  // TODO: handle this check the server instead of the client
  const hasMainEvent = fights.length >= 1 && isAnnouncedFight(fights[0]);
  const hasPartialLineup = announcedFights.length > 0 && !hasMainEvent;

  const getFighterAvatar = (fighter, isRight = false) => (
    <div className={`${classes.avatarSection} ${isRight ? classes.avatarSectionRight : ''}`}>
      <Avatar className={classes.avatar}>
        <PersonIcon />
      </Avatar>
      <div className={classes.fighterinfo}>
        <Typography className={classes.fighterName} variant="h5">
          {fighter.name}
        </Typography>
        <Typography className={classes.fighterRecord} variant="caption">
          {fighter.record || 'Record unavailable'}
        </Typography>
      </div>
    </div>
  );

  const listItems = announcedFights.map((item, index) => (
    <Paper
      className={classes.fightContainer}
      key={item.fightName}
      elevation={0}
    >
      <div className={classes.boutHeader}>
        <Typography className={classes.boutNumber} variant="caption">
          {index === 0 ? 'Main event' : `Bout ${index + 1}`}
        </Typography>
        {item.fightName && (
          <Typography className={classes.boutName} color="textSecondary" variant="caption">
            {item.fightName}
          </Typography>
        )}
      </div>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={5}>
          <div className={classes.cardLeft}>
            {getFighterAvatar(item.fighterOne)}
          </div>
        </Grid>

        <Grid item xs={12} sm={2}>
          <div className={classes.cardMiddle}>
            <Typography className={classes.vsText} variant="h5">
              vs
            </Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={5}>
          <div className={classes.cardRight}>
            {getFighterAvatar(item.fighterTwo, true)}
          </div>
        </Grid>
      </Grid>
    </Paper>
  ));

  return (
    <div className={classes.root}>
      <Container className={classes.buttonContainer} maxWidth="md">
        <Button
          className={classes.backButton}
          color="primary"
          component={RouterLink(backDestination)}
          startIcon={<ArrowBack />}
        >
          {backLabel}
        </Button>
      </Container>

      {isLoading && <LoadingCircle label="Loading fight card" />}

      {isError && (
        <ErrorMessage message="There was an error fetching the fight card." />
      )}

      {hasFightCard && !isError && (
        <Container className={classes.paperWrapper} maxWidth="md">
          <div className={classes.headerContainer}>
            <div className={classes.headerDetails}>
              <Typography className={classes.eyebrow} component="p" variant="overline">
                Fight card
              </Typography>
              <Typography className={classes.headerTitle} component="h1" variant="h4">
                {fightCard.eventName}
              </Typography>
              <EventVenue venue={fightCard.location} />
              <EventDate
                date={moment(fightCard.unixDate).format('dddd, MMMM Do, YYYY')}
              />
            </div>
            <div className={classes.headerAction}>
              {announcedFights.length > 0 && (
                <Typography className={classes.boutCount} color="textSecondary" variant="body2">
                  {`${announcedFights.length} ${announcedFights.length === 1 ? 'bout' : 'bouts'}`}
                </Typography>
              )}
              {fights.length > 0 && (
                <RawToggleSwitch
                  isRaw={isRaw}
                  setIsRaw={setIsRaw}
                  disabled={isLoading}
                />
              )}
            </div>
          </div>

          <div>
            {isRaw && fights.length > 0 && <RawDataView data={fights} />}
            {!isRaw && hasMainEvent && <div>{listItems}</div>}
            {(!isRaw || fights.length === 0) && !hasMainEvent && (
              <Paper
                className={classes.emptyState}
                component="section"
                elevation={0}
              >
                <div className={classes.emptyStateIcon} aria-hidden="true">
                  <SportsMmaIcon />
                </div>
                <Typography className={classes.emptyStateEyebrow} component="p" variant="overline">
                  Lineup pending
                </Typography>
                <Typography className={classes.emptyStateTitle} component="h2" variant="h5">
                  {hasPartialLineup ? 'Main event not announced' : 'Fight card coming soon'}
                </Typography>
                <Typography className={classes.emptyStateCopy} color="textSecondary" variant="body2">
                  {hasPartialLineup
                    ? "This card doesn't have a main event yet. Check back as the lineup is finalized."
                    : 'No bouts have been announced for this event yet. Check back closer to fight night.'}
                </Typography>
              </Paper>
            )}
          </div>
        </Container>
      )}
    </div>
  );
}

export default FightCard;
