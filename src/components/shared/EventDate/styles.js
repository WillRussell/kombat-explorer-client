import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(0.75),
  },
  icon: {
    color: theme.palette.text.secondary,
    fontSize: '1.05rem',
    marginRight: theme.spacing(1),
  },
}));

export default styles;
