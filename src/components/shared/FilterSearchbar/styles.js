import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  searchContainer: {
    flex: 1,
    maxWidth: 460,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'none',
    },
  },
  input: {
    width: '100%',
    minHeight: 42,
    padding: theme.spacing(0.5, 1.25),
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.type === 'dark' ? '#11181C' : '#F7F9FA',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 8,
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    '&:focus-within': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 3px ${theme.palette.type === 'dark'
        ? 'rgba(143, 183, 204, 0.12)'
        : 'rgba(49, 92, 117, 0.1)'}`,
    },
    '& .MuiInputAdornment-root': {
      color: theme.palette.text.secondary,
    },
  },
  clearButton: {
    width: 30,
    height: 30,
    color: theme.palette.text.secondary,
    '& svg': {
      fontSize: '1rem',
    },
    '&:hover': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

export default styles;
