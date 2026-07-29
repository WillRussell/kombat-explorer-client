import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.appBar,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.type === 'dark'
      ? 'rgba(16, 21, 24, 0.92)'
      : 'rgba(255, 255, 255, 0.92)',
    borderBottom: `1px solid ${theme.palette.divider}`,
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
  },
  toolbar: {
    width: '100%',
    maxWidth: 1200,
    minHeight: 64,
    margin: '0 auto',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(2),
    },
  },
  brand: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    minWidth: 0,
    color: 'inherit',
    textDecoration: 'none',
    '&:focus': {
      outline: 'none',
    },
    '&:focus-visible': {
      borderRadius: 8,
      boxShadow: `0 0 0 3px ${theme.palette.type === 'dark'
        ? 'rgba(143, 183, 204, 0.22)'
        : 'rgba(49, 92, 117, 0.18)'}`,
    },
    '&:hover $brandMark': {
      backgroundColor: theme.palette.primary.dark,
      transform: 'translateY(-1px)',
    },
    '&:hover $brandText': {
      color: theme.palette.primary.main,
    },
  },
  brandMark: {
    display: 'grid',
    placeItems: 'center',
    width: 30,
    height: 30,
    flexShrink: 0,
    marginRight: theme.spacing(1.25),
    borderRadius: 8,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    fontSize: '0.9rem',
    fontWeight: 700,
    transition: 'background-color 0.2s ease, transform 0.2s ease',
  },
  brandText: {
    fontSize: '1rem',
    fontWeight: 650,
    letterSpacing: '-0.015em',
    transition: 'color 0.2s ease',
  },
  navLinks: {
    display: 'flex',
    marginRight: theme.spacing(0.5),
    gap: theme.spacing(0.5),
  },
  navLink: {
    minWidth: 0,
    minHeight: 38,
    color: theme.palette.text.secondary,
    fontSize: '0.875rem',
    padding: theme.spacing(0.75, 1.25),
    borderRadius: 8,
    transition: 'color 0.2s ease, background-color 0.2s ease',
    '&:hover': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.action.hover,
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0.75),
      '& .MuiButton-startIcon': {
        margin: 0,
      },
      '& .MuiButton-label': {
        fontSize: 0,
      },
    },
  },
  navLinkActive: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.type === 'dark'
      ? 'rgba(143, 183, 204, 0.12)'
      : theme.palette.primary.light,
    '&:hover': {
      backgroundColor: theme.palette.type === 'dark'
        ? 'rgba(143, 183, 204, 0.18)'
        : theme.palette.primary.light,
    },
  },
  navIcon: {
    fontSize: '1.1rem !important',
  },
}));

export default styles;
