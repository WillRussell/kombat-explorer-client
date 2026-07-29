import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  pageContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4, 2, 7),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6, 3, 9),
    },
  },
}));

export default styles;
