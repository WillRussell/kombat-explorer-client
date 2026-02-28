import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(3 / 2),
    '& .MuiSwitch-colorSecondary.Mui-checked': {
      color: theme.palette.secondary.main,
    },
    '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

export default styles;
