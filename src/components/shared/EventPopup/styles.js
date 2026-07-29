import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    width: 240,
  },
  header: {
    paddingBottom: theme.spacing(1.25),
    marginBottom: theme.spacing(1.25),
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  title: {
    fontWeight: 600,
    fontSize: '0.95rem',
    lineHeight: 1.2,
    letterSpacing: '0.01em',
    paddingRight: theme.spacing(2),
  },
  subtitle: {
    marginTop: 2,
    color: theme.palette.text.secondary,
    fontWeight: 500,
    fontSize: '0.8rem',
  },
  detailRow: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(0.75),
  },
  detailIcon: {
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    marginRight: theme.spacing(0.75),
    flexShrink: 0,
  },
  detailText: {
    fontSize: '0.75rem',
    lineHeight: 1.3,
  },
  buttonWrapper: {
    marginTop: theme.spacing(1.5),
    '& .MuiButton-root': {
      justifyContent: 'space-between',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: 'none',
      },
    },
  },
}));

export default styles;
