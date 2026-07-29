import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    width: 270,
  },
  header: {
    padding: theme.spacing(0.5, 0.5, 1.25),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  eyebrow: {
    display: 'block',
    marginBottom: theme.spacing(0.25),
    color: theme.palette.primary.main,
    fontSize: '0.68rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  location: {
    paddingRight: theme.spacing(2),
    fontSize: '0.95rem',
    fontWeight: 600,
    lineHeight: 1.25,
  },
  locationNote: {
    display: 'block',
    marginTop: theme.spacing(0.25),
    color: theme.palette.text.secondary,
    fontSize: '0.68rem',
  },
  eventList: {
    maxHeight: 260,
    overflowY: 'auto',
    padding: theme.spacing(0.5, 0),
  },
  eventButton: {
    width: '100%',
    minHeight: 54,
    padding: theme.spacing(1, 0.5),
    color: theme.palette.text.primary,
    borderRadius: 6,
    '& .MuiButton-label': {
      justifyContent: 'space-between',
      minWidth: 0,
      textAlign: 'left',
    },
    '& .MuiButton-endIcon': {
      flexShrink: 0,
      color: theme.palette.primary.main,
    },
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  eventText: {
    display: 'flex',
    minWidth: 0,
    flexDirection: 'column',
  },
  eventTitle: {
    overflow: 'hidden',
    fontSize: '0.78rem',
    fontWeight: 600,
    lineHeight: 1.3,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  eventDate: {
    marginTop: 2,
    color: theme.palette.text.secondary,
    fontSize: '0.7rem',
    fontWeight: 400,
  },
}));

export default styles;
