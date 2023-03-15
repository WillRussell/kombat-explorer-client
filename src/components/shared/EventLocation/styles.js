import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(1),
  },
  icon: {
    color: theme.palette.warning.light,
    marginRight: theme.spacing(3 / 4),
  },
  altIcon: {
    color: theme.palette.warning.light,
    marginRight: theme.spacing(3 / 4),
  },
  text: {},
  altText: {},
}));

export default styles;
