import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginRight: theme.spacing(0.5),
    color: theme.palette.text.secondary,
    '& .MuiFormControlLabel-root': {
      margin: 0,
    },
    '& .MuiFormControlLabel-label': {
      fontSize: '0.8rem',
      fontWeight: 500,
    },
    '& .MuiSwitch-colorSecondary.Mui-checked': {
      color: theme.palette.primary.main,
    },
    '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default styles;
