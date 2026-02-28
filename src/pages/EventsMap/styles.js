import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  mapWrapper: {
    flex: 1,
    width: '100%',
    minHeight: 'calc(100vh - 100px)',
    borderRadius: 8,
    overflow: 'hidden',
    '& .leaflet-container': {
      height: '100%',
      width: '100%',
      borderRadius: 8,
    },
    '& .leaflet-popup-content-wrapper': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      borderRadius: 8,
      borderLeft: `3px solid ${theme.palette.primary.main}`,
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.35)',
      padding: 0,
      overflow: 'hidden',
    },
    '& .leaflet-popup-tip': {
      backgroundColor: theme.palette.background.paper,
    },
    '& .leaflet-popup-content': {
      margin: '12px 14px',
      width: 'auto !important',
    },
    '& .leaflet-popup-content p': {
      margin: 0,
    },
    '& .leaflet-popup-close-button': {
      color: `${theme.palette.text.secondary} !important`,
      fontSize: '18px !important',
      top: '4px !important',
      right: '6px !important',
    },
  },
}));

export default styles;
