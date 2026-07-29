import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  const isDark = theme.palette.type === 'dark';
  return {
    root: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      width: '100%',
    },
    pageHeader: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: theme.spacing(2),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        alignItems: 'flex-start',
        flexDirection: 'column',
      },
    },
    eyebrow: {
      marginBottom: theme.spacing(0.5),
      color: theme.palette.primary.main,
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.09em',
      lineHeight: 1.5,
    },
    pageTitle: {
      marginBottom: theme.spacing(0.75),
    },
    headerSummary: {
      display: 'flex',
      alignItems: 'flex-end',
      flexDirection: 'column',
      flexShrink: 0,
      gap: theme.spacing(0.75),
      [theme.breakpoints.down('xs')]: {
        alignItems: 'flex-start',
      },
    },
    dateRange: {
      color: theme.palette.text.secondary,
      fontSize: '0.78rem',
      fontWeight: 500,
    },
    eventCount: {
      flexShrink: 0,
      padding: theme.spacing(0.75, 1.25),
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 999,
      backgroundColor: theme.palette.background.paper,
    },
    titleArea: {
      marginBottom: theme.spacing(3),
    },
    titleActions: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      gap: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(1),
      border: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down('xs')]: {
        alignItems: 'stretch',
        flexDirection: 'column',
      },
    },
    eventsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: theme.spacing(2),
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '1fr 1fr',
      },
    },
    eventCard: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: 220,
      padding: theme.spacing(3),
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: isDark ? 'none' : '0 1px 2px rgba(23, 36, 44, 0.03)',
      transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
      '&:hover': {
        borderColor: theme.palette.type === 'dark' ? '#40515A' : '#CAD5DB',
        boxShadow: isDark
          ? '0 8px 24px rgba(0, 0, 0, 0.16)'
          : '0 8px 24px rgba(23, 36, 44, 0.07)',
      },
    },
    cardContent: {
      flex: 1,
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: theme.spacing(2),
      marginBottom: theme.spacing(2.5),
    },
    cardHeading: {
      minWidth: 0,
    },
    cardTitle: {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(0.5),
    },
    cardSubtitle: {
      minHeight: '1.5em',
      color: theme.palette.text.secondary,
    },
    viewButton: {
      flexShrink: 0,
      minWidth: 132,
      minHeight: 40,
      padding: theme.spacing(0.5, 0.5, 0.5, 1.5),
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      boxShadow: 'none',
      transition: 'background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
      '& .MuiButton-label': {
        justifyContent: 'space-between',
        width: '100%',
      },
      '& .MuiButton-endIcon': {
        display: 'grid',
        placeItems: 'center',
        width: 28,
        height: 28,
        marginRight: 0,
        marginLeft: theme.spacing(1.25),
        borderRadius: 6,
        backgroundColor: isDark
          ? 'rgba(16, 33, 42, 0.13)'
          : 'rgba(255, 255, 255, 0.16)',
        transition: 'transform 0.2s ease',
        '& svg': {
          fontSize: '1rem',
        },
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        boxShadow: isDark
          ? '0 6px 18px rgba(0, 0, 0, 0.2)'
          : '0 6px 18px rgba(49, 92, 117, 0.2)',
        transform: 'translateY(-1px)',
        '& .MuiButton-endIcon': {
          transform: 'translateX(2px)',
        },
      },
      '&:active': {
        boxShadow: 'none',
        transform: 'translateY(0)',
      },
      '&.Mui-focusVisible': {
        boxShadow: `0 0 0 3px ${isDark
          ? 'rgba(143, 183, 204, 0.22)'
          : 'rgba(49, 92, 117, 0.2)'}`,
      },
      [theme.breakpoints.down('xs')]: {
        minWidth: 44,
        width: 44,
        padding: theme.spacing(0.5),
        '& .MuiButton-label': {
          fontSize: 0,
          justifyContent: 'center',
        },
        '& .MuiButton-endIcon': {
          margin: 0,
          backgroundColor: 'transparent',
        },
      },
    },
    noResults: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(6),
      color: theme.palette.text.secondary,
      textAlign: 'center',
    },
    noResultsIcon: {
      fontSize: '3rem',
      marginBottom: theme.spacing(2),
      color: theme.palette.text.secondary,
      opacity: 0.5,
    },
  };
});

export default styles;
