import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
  },
  icon: {
    color: theme.palette.error.main,
    marginRight: theme.spacing(1.5),
  },
}));

export default styles;
