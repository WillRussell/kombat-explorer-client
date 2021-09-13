import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  eventCard: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4),
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
  cardLeft: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  cardRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: theme.spacing(4),
  },
  paperWrapper: {
    margin: theme.spacing(3),
  },
}));

export default styles;
