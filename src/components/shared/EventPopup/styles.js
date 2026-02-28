import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    width: 230,
  },
  header: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  title: {
    fontWeight: 800,
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
    marginTop: theme.spacing(0.5),
  },
  detailIcon: {
    color: theme.palette.warning.main,
    fontSize: '0.9rem',
    marginRight: theme.spacing(0.75),
    flexShrink: 0,
  },
  detailText: {
    fontSize: '0.75rem',
    lineHeight: 1.3,
  },
  buttonWrapper: {
    marginTop: theme.spacing(1),
    paddingTop: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

export default styles;
