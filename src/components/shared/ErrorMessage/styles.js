import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  const isDark = theme.palette.type === 'dark';
  return {
    root: {
      display: 'flex',
      width: 'calc(100% - 48px)',
      maxWidth: 1232,
      minHeight: 260,
      margin: '0 auto',
      padding: theme.spacing(5, 3),
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: isDark
        ? 'rgba(223, 119, 119, 0.035)'
        : 'rgba(181, 71, 71, 0.025)',
      border: `1px dashed ${isDark
        ? 'rgba(223, 119, 119, 0.3)'
        : 'rgba(181, 71, 71, 0.24)'}`,
      borderRadius: 12,
      textAlign: 'center',
    },
    icon: {
      display: 'grid',
      width: 58,
      height: 58,
      marginBottom: theme.spacing(2),
      placeItems: 'center',
      color: theme.palette.error.main,
      backgroundColor: isDark
        ? 'rgba(223, 119, 119, 0.1)'
        : 'rgba(181, 71, 71, 0.08)',
      borderRadius: '50%',
      '& svg': {
        fontSize: '1.7rem',
      },
    },
    title: {
      marginBottom: theme.spacing(0.75),
      color: theme.palette.text.primary,
    },
  };
});

export default styles;
