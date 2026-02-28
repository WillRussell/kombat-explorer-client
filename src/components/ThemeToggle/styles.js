import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(0, 1),
    borderRadius: '50%',
    transition: 'background-color 0.2s ease',
    '&:hover': {
      backgroundColor: 'rgba(220, 38, 38, 0.12)',
    },
  },
}));

export default styles;
