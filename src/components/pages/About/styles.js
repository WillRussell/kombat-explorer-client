import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(10),
  },
  title: {
    fontSize: '5em',
    paddingBottom: theme.spacing(1 / 2),
  },
  subtitle: {
    marginBottom: theme.spacing(3),
    fontSize: '1.25em',
  },
}));

export default styles;
