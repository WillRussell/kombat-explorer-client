import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    marginLeft: theme.spacing(0.5),
  },
  button: {
    width: 38,
    height: 38,
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.action.hover,
    },
    '& svg': {
      fontSize: '1.15rem',
    },
  },
}));

export default styles;
