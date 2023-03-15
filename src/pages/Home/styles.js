import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleArea: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  titleActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
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
}));

export default styles;
