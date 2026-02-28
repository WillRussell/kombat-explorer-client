import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  searchContainer: {
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottomColor: theme.palette.secondary.main,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: theme.palette.secondary.main,
    },
  },
}));

export default styles;
