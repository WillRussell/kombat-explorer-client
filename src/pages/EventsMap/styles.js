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
  mapSummary: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    gap: theme.spacing(0.75),
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start',
    },
  },
  eventCount: {
    flexShrink: 0,
    padding: theme.spacing(0.75, 1.25),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 999,
    backgroundColor: theme.palette.background.paper,
  },
  mapPointCount: {
    color: theme.palette.text.secondary,
    fontSize: '0.72rem',
    fontWeight: 500,
  },
  mapWrapper: {
    position: 'relative',
    flex: 1,
    width: '100%',
    minHeight: 520,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
    boxShadow: theme.palette.type === 'dark'
      ? '0 12px 30px rgba(0, 0, 0, 0.15)'
      : '0 12px 30px rgba(23, 36, 44, 0.07)',
    [theme.breakpoints.down('xs')]: {
      minHeight: 480,
    },
    '& .leaflet-tile-pane': {
      filter: theme.palette.type === 'dark'
        ? 'invert(0.88) hue-rotate(180deg) brightness(0.78) saturate(0.42) contrast(0.92)'
        : 'saturate(0.62) contrast(0.94) brightness(1.03)',
    },
    '& .leaflet-container': {
      height: '100%',
      width: '100%',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.type === 'dark' ? '#172126' : '#E9EFF2',
      fontFamily: theme.typography.fontFamily,
    },
    '& .event-marker-icon': {
      display: 'grid',
      placeItems: 'center',
      background: 'transparent',
      border: 0,
    },
    '& .event-marker-dot': {
      display: 'grid',
      width: 16,
      height: 16,
      placeItems: 'center',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      border: `3px solid ${theme.palette.background.paper}`,
      borderRadius: '50%',
      boxShadow: '0 3px 10px rgba(20, 42, 54, 0.35)',
      fontSize: '0.62rem',
      fontWeight: 700,
      lineHeight: 1,
      transition: 'transform 0.18s ease, box-shadow 0.18s ease',
    },
    '& .event-marker-icon-group .event-marker-dot': {
      width: 26,
      height: 26,
    },
    '& .event-marker-icon:hover .event-marker-dot': {
      boxShadow: '0 4px 14px rgba(20, 42, 54, 0.45)',
      transform: 'scale(1.12)',
    },
    '& .event-marker-icon:focus': {
      outline: 'none',
    },
    '& .event-marker-icon:focus .event-marker-dot': {
      boxShadow: `0 0 0 4px ${theme.palette.type === 'dark'
        ? 'rgba(143, 183, 204, 0.3)'
        : 'rgba(49, 92, 117, 0.24)'}, 0 4px 14px rgba(20, 42, 54, 0.35)`,
      transform: 'scale(1.12)',
    },
    '& .leaflet-control-zoom': {
      overflow: 'hidden',
      border: '0 !important',
      borderRadius: '8px !important',
      boxShadow: '0 6px 18px rgba(20, 42, 54, 0.18)',
    },
    '& .leaflet-control-zoom a': {
      width: '34px !important',
      height: '34px !important',
      color: `${theme.palette.text.primary} !important`,
      backgroundColor: `${theme.palette.background.paper} !important`,
      borderBottomColor: `${theme.palette.divider} !important`,
      fontSize: '18px !important',
      lineHeight: '34px !important',
    },
    '& .leaflet-control-zoom a:hover': {
      color: `${theme.palette.primary.main} !important`,
      backgroundColor: `${theme.palette.action.hover} !important`,
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
    '& .leaflet-control-attribution': {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.type === 'dark'
        ? 'rgba(24, 32, 37, 0.9)'
        : 'rgba(255, 255, 255, 0.9)',
      borderTopLeftRadius: 6,
      fontSize: '0.62rem',
      '& a': {
        color: theme.palette.primary.main,
      },
    },
  },
  resetMapButton: {
    position: 'absolute',
    zIndex: 500,
    top: theme.spacing(1.5),
    left: theme.spacing(1.5),
    minHeight: 36,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.type === 'dark'
      ? 'rgba(24, 32, 37, 0.92)'
      : 'rgba(255, 255, 255, 0.92)',
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 6px 18px rgba(20, 42, 54, 0.15)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.background.paper,
      boxShadow: '0 8px 22px rgba(20, 42, 54, 0.2)',
    },
    [theme.breakpoints.down('xs')]: {
      top: theme.spacing(1),
      left: theme.spacing(1),
      width: 38,
      minWidth: 38,
      padding: 0,
      '& .MuiButton-label': {
        fontSize: 0,
      },
      '& .MuiButton-startIcon': {
        margin: 0,
        '& svg': {
          fontSize: '1.15rem',
        },
      },
    },
  },
  mapLegend: {
    position: 'absolute',
    zIndex: 500,
    top: theme.spacing(1.5),
    right: theme.spacing(1.5),
    minWidth: 210,
    padding: theme.spacing(1.25, 1.5),
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.type === 'dark'
      ? 'rgba(24, 32, 37, 0.92)'
      : 'rgba(255, 255, 255, 0.92)',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 9,
    boxShadow: '0 8px 24px rgba(20, 42, 54, 0.15)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    pointerEvents: 'none',
    [theme.breakpoints.down('xs')]: {
      top: theme.spacing(1),
      right: theme.spacing(1),
      minWidth: 0,
      maxWidth: 'calc(100% - 64px)',
    },
  },
  legendLine: {
    display: 'flex',
    alignItems: 'center',
  },
  legendMarker: {
    width: 12,
    height: 12,
    flexShrink: 0,
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.background.paper}`,
    borderRadius: '50%',
    boxShadow: '0 2px 7px rgba(20, 42, 54, 0.3)',
  },
  legendTitle: {
    fontSize: '0.78rem',
    fontWeight: 600,
  },
  legendHint: {
    display: 'block',
    marginTop: theme.spacing(0.5),
    color: theme.palette.text.secondary,
    fontSize: '0.66rem',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
}));

export default styles;
