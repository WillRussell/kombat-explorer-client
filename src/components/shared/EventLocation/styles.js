import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  icon: {
    color: theme.palette.warning.main,
    fontSize: '1.2rem',
    marginRight: theme.spacing(3 / 4),
  },
  altIcon: {
    color: theme.palette.warning.main,
    fontSize: '1.2rem',
    marginRight: theme.spacing(3 / 4),
  },
  text: {},
  altText: {},
}));

export default styles;
