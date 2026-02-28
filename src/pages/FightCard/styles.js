import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  const isDark = theme.palette.type === 'dark';
  return {
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    buttonContainer: {
      marginTop: theme.spacing(2),
    },
    backButton: {
      borderWidth: 2,
      '&:hover': {
        borderWidth: 2,
      },
    },
    headerContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'space-between',
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      paddingLeft: theme.spacing(2),
      background: isDark
        ? 'linear-gradient(135deg, rgba(220,38,38,0.08) 0%, transparent 60%)'
        : 'linear-gradient(135deg, rgba(185,28,28,0.06) 0%, transparent 60%)',
    },
    headerTitle: {
      fontWeight: 800,
    },
    fightContainer: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(4),
      borderLeft: '3px solid transparent',
      border: isDark ? 'none' : '1px solid #D4D4D4',
      borderLeftWidth: '3px',
      borderLeftStyle: 'solid',
      borderLeftColor: 'transparent',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      '&:first-child': {
        borderLeftColor: theme.palette.primary.main,
      },
      '&:hover': {
        borderLeftColor: theme.palette.secondary.main,
        boxShadow: isDark ? theme.shadows[8] : '0 6px 20px rgba(0,0,0,0.1)',
      },
    },
    avatarSection: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      padding: theme.spacing(4),
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
    fighterinfo: {
      marginLeft: theme.spacing(1),
    },
    fighterName: {
      fontWeight: 700,
    },
    fighterRecord: {
      textTransform: 'uppercase',
      color: theme.palette.text.secondary,
    },
    vsText: {
      fontWeight: 800,
      color: theme.palette.primary.main,
    },
    cardLeft: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    cardMiddle: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    cardRight: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    paperWrapper: {
      margin: theme.spacing(3),
    },
  };
});

export default styles;
