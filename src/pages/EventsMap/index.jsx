import 'leaflet/dist/leaflet.css';

import { withTheme } from '@material-ui/core/styles';
import ErrorMessage from 'components/shared/ErrorMessage';
import EventPopup from 'components/shared/EventPopup';
import LoadingCircle from 'components/shared/LoadingCircle';
import useFetchEvents from 'hooks/useFetchEvents';
import L from 'leaflet';
import React from 'react';
import {
  Map, Marker, Popup, TileLayer,
} from 'react-leaflet';

import { getEventCoordinates } from '../../support/eventCoordinates';
import useStyles from './styles';

// Fix default marker icons broken by webpack
// eslint-disable-next-line no-underscore-dangle
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  // eslint-disable-next-line global-require
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  // eslint-disable-next-line global-require
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  // eslint-disable-next-line global-require
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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

  return (
    <div className={classes.root}>
      <div className={classes.mapWrapper}>
        <Map center={[25, 0]} zoom={3} scrollWheelZoom zoomControl>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {geoEvents.map((event) => (
            <Marker key={event.id} position={event.coords}>
              <Popup>
                <EventPopup event={event} />
              </Popup>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
}

export default withTheme(EventsMap);
