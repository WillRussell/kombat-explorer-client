import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    flex: 1,
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  pageContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
    },
  },
  buffer: {
    ...theme.mixins.toolbar,
  },
}));

export default styles;
