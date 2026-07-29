import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  pageHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
  },
  eyebrow: {
    marginBottom: theme.spacing(0.5),
    color: theme.palette.primary.main,
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.09em',
    lineHeight: 1.5,
  },
  pageTitle: {
    marginBottom: theme.spacing(0.75),
  },
  eventCount: {
    flexShrink: 0,
    padding: theme.spacing(0.75, 1.25),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 999,
    backgroundColor: theme.palette.background.paper,
  },
  mapWrapper: {
    flex: 1,
    width: '100%',
    minHeight: 520,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    boxShadow: theme.palette.type === 'dark'
      ? '0 12px 30px rgba(0, 0, 0, 0.15)'
      : '0 12px 30px rgba(23, 36, 44, 0.07)',
    '& .leaflet-container': {
      height: '100%',
      width: '100%',
      borderRadius: theme.shape.borderRadius,
    },
    '& .leaflet-popup-content-wrapper': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 10,
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
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
