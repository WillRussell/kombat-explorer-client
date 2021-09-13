import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(12),
    alignItems: 'center',
    display: 'flex',
    flex: 1,
  },
  icon: {
    marginRight: theme.spacing(1.5),
  },
}));

export default styles;
