import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: theme.spacing(2),
  },

  headerContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
  },
  fightContainer: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(4),
  },
  avatarSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    padding: theme.spacing(4),
  },
  fighterinfo: {
    marginLeft: theme.spacing(1),
  },
  cardLeft: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cardMiddle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardRight: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  paperWrapper: {
    margin: theme.spacing(3),
  },
}));

export default styles;
