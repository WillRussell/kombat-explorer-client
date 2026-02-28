import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
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
  buffer: {
    ...theme.mixins.toolbar,
  },
}));

export default styles;
