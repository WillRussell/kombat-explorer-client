import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    color: '#F5F5F5',
  },
  toolbar: {
    minHeight: 64,
    [theme.breakpoints.up('sm')]: {
      minHeight: 72,
    },
  },
  brandText: {
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
  },
  brandAccent: {
    color: theme.palette.primary.main,
  },
  navLinks: {
    display: 'flex',
    marginRight: theme.spacing(1),
    gap: theme.spacing(0.5),
  },
  navLink: {
    color: '#A3A3A3',
    fontWeight: 600,
    fontSize: '0.8rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: theme.spacing(0.75, 1.5),
    borderRadius: 6,
    transition: 'color 0.2s ease, background-color 0.2s ease',
    '&:hover': {
      color: '#F5F5F5',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  navLinkActive: {
    color: '#F5F5F5',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  buffer: {
    ...theme.mixins.toolbar,
  },
}));

export default styles;
