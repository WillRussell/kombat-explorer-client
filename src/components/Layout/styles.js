import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  const isLight = theme.palette.type === 'light';
  const appBackground = isLight ? theme.palette.grey['200'] : 'initial';
  return {
    layout: {
      display: 'flex',
      flex: 1,
      backgroundColor: appBackground,
    },
    pageContent: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(1),
    },
    buffer: {
      ...theme.mixins.toolbar,
    },
  };
});

export default styles;
