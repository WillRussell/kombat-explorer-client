import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  preformat: {
    whiteSpace: 'break-word',
    overflow: 'hidden',
  },
}));

export default styles;
