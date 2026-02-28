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
    titleArea: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
    titleActions: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      display: 'flex',
      backgroundColor: theme.palette.background.paper,
      borderRadius: 8,
      padding: theme.spacing(1.5, 2),
      border: isDark ? '1px solid #2A2A2A' : '1px solid #D4D4D4',
    },
    eventsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
      },
    },
    eventCard: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(3),
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      border: isDark ? 'none' : '1px solid #D4D4D4',
      borderLeftWidth: '4px',
      borderLeftStyle: 'solid',
      borderLeftColor: theme.palette.primary.main,
      transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: isDark ? theme.shadows[12] : '0 8px 24px rgba(0,0,0,0.12)',
        borderLeftColor: theme.palette.secondary.main,
      },
    },
    cardContent: {
      flex: 1,
    },
    cardTitle: {
      fontWeight: 700,
      marginBottom: theme.spacing(0.5),
    },
    cardSubtitle: {
      fontWeight: 400,
      color: theme.palette.text.secondary,
    },
    cardActions: {
      borderTop: `1px solid ${theme.palette.divider}`,
      paddingTop: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
    noResults: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(6),
      color: theme.palette.text.secondary,
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
