import 'leaflet/dist/leaflet.css';

import Container from '@material-ui/core/Container';
import { withTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ErrorMessage from 'components/shared/ErrorMessage';
import EventGroupPopup from 'components/shared/EventGroupPopup';
import EventPopup from 'components/shared/EventPopup';
import LoadingCircle from 'components/shared/LoadingCircle';
import useFetchEvents from 'hooks/useFetchEvents';
import L from 'leaflet';
import React from 'react';
import {
  Map as LeafletMap, Marker, Popup, TileLayer, ZoomControl,
} from 'react-leaflet';

import { getEventCoordinates } from '../../support/eventCoordinates';
import useStyles from './styles';

const markerIconCache = {};

const getEventMarkerIcon = (eventCount) => {
  if (!markerIconCache[eventCount]) {
    const isGroup = eventCount > 1;
    markerIconCache[eventCount] = L.divIcon({
      className: `event-marker-icon${isGroup ? ' event-marker-icon-group' : ''}`,
      html: `<span class="event-marker-dot">${isGroup ? eventCount : ''}</span>`,
      iconAnchor: [16, 16],
      iconSize: [32, 32],
      popupAnchor: [0, -14],
    });
  }

  return markerIconCache[eventCount];
};

function EventsMap() {
  const classes = useStyles();
  const [{ eventsCollection, isLoading, isError }] = useFetchEvents();

  if (isLoading) {
    return <LoadingCircle />;
  }

  if (isError) {
    return (
      <ErrorMessage message="There was an error fetching the events collection." />
    );
  }

  const geoEvents = eventsCollection
    .map((event) => {
      const coords = getEventCoordinates(
        event.locationDetails.shortLocation,
        event.locationDetails.country,
      );
      return coords ? { ...event, coords } : null;
    })
    .filter(Boolean);
  const groupedByCoordinates = new Map();

  geoEvents.forEach((event) => {
    const coordinateKey = event.coords.join(',');
    const existingGroup = groupedByCoordinates.get(coordinateKey);

    if (existingGroup) {
      existingGroup.events.push(event);
    } else {
      groupedByCoordinates.set(coordinateKey, {
        coords: event.coords,
        events: [event],
      });
    }
  });

  const markerGroups = Array.from(groupedByCoordinates.values());

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">
        <div className={classes.pageHeader}>
          <div>
            <Typography className={classes.eyebrow} component="p" variant="overline">
              Explore
            </Typography>
            <Typography className={classes.pageTitle} component="h1" variant="h4">
              Event map
            </Typography>
            <Typography color="textSecondary" variant="body1">
              See where upcoming cards are happening.
            </Typography>
          </div>
          <div className={classes.mapSummary}>
            <Typography className={classes.eventCount} color="textSecondary" variant="body2">
              {`${geoEvents.length} of ${eventsCollection.length} mapped`}
            </Typography>
            <Typography className={classes.mapPointCount} color="textSecondary" variant="caption">
              {`${markerGroups.length} ${markerGroups.length === 1 ? 'map point' : 'map points'}`}
            </Typography>
          </div>
        </div>

        <div className={classes.mapWrapper}>
          <div className={classes.mapLegend}>
            <div className={classes.legendLine}>
              <span className={classes.legendMarker} />
              <Typography className={classes.legendTitle} variant="body2">
                Event location
              </Typography>
            </div>
            <Typography className={classes.legendHint} variant="caption">
              Numbered points contain multiple events
            </Typography>
          </div>

          <LeafletMap
            center={[25, 0]}
            scrollWheelZoom
            zoom={3}
            zoomControl={false}
          >
            <ZoomControl position="bottomleft" />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markerGroups.map(({ coords, events }) => (
              <Marker
                icon={getEventMarkerIcon(events.length)}
                key={coords.join(',')}
                position={coords}
                title={`${events.length} ${events.length === 1 ? 'event' : 'events'}`}
              >
                <Popup>
                  {events.length === 1
                    ? <EventPopup event={events[0]} />
                    : <EventGroupPopup events={events} />}
                </Popup>
              </Marker>
            ))}
          </LeafletMap>
        </div>
      </Container>
    </div>
  );
}

export default withTheme(EventsMap);
