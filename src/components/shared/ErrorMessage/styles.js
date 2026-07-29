import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flex: 1,
    minHeight: 240,
    padding: theme.spacing(4),
    color: theme.palette.text.secondary,
    textAlign: 'center',
  },
  icon: {
    color: theme.palette.error.main,
    marginRight: theme.spacing(1.5),
  },
}));

export default styles;
