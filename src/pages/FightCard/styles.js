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
    buttonContainer: {
      marginBottom: theme.spacing(2),
    },
    backButton: {
      minHeight: 36,
      marginLeft: theme.spacing(-1),
      color: theme.palette.text.secondary,
      '&:hover': {
        color: theme.palette.text.primary,
        backgroundColor: 'transparent',
      },
    },
    headerContainer: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: theme.spacing(3),
      marginBottom: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      borderBottom: `1px solid ${theme.palette.divider}`,
      [theme.breakpoints.down('xs')]: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: theme.spacing(2),
      },
    },
    headerDetails: {
      minWidth: 0,
    },
    eyebrow: {
      marginBottom: theme.spacing(0.5),
      color: theme.palette.primary.main,
      fontSize: '0.7rem',
      fontWeight: 700,
      letterSpacing: '0.09em',
      lineHeight: 1.5,
    },
    headerTitle: {
      marginBottom: theme.spacing(1.5),
    },
    headerAction: {
      display: 'flex',
      alignItems: 'center',
      flexShrink: 0,
      gap: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        justifyContent: 'space-between',
      },
    },
    boutCount: {
      padding: theme.spacing(0.65, 1.1),
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 999,
      fontSize: '0.76rem',
      fontWeight: 600,
    },
    fightContainer: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(0, 3, 2.5),
      border: `1px solid ${theme.palette.divider}`,
      boxShadow: isDark ? 'none' : '0 1px 2px rgba(23, 36, 44, 0.03)',
      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
      '&:hover': {
        borderColor: isDark ? '#40515A' : '#CAD5DB',
        boxShadow: isDark
          ? '0 8px 24px rgba(0, 0, 0, 0.16)'
          : '0 8px 24px rgba(23, 36, 44, 0.07)',
      },
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0, 2, 2.5),
      },
    },
    emptyState: {
      display: 'flex',
      minHeight: 260,
      padding: theme.spacing(5, 3),
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: isDark
        ? 'rgba(143, 183, 204, 0.035)'
        : 'rgba(49, 92, 117, 0.025)',
      border: `1px dashed ${isDark ? '#34454E' : '#CCD8DE'}`,
      borderRadius: 12,
      textAlign: 'center',
      [theme.breakpoints.down('xs')]: {
        minHeight: 230,
        padding: theme.spacing(4, 2),
      },
    },
    emptyStateIcon: {
      display: 'grid',
      width: 64,
      height: 64,
      marginBottom: theme.spacing(2),
      placeItems: 'center',
      color: theme.palette.primary.main,
      backgroundColor: isDark
        ? 'rgba(143, 183, 204, 0.12)'
        : 'rgba(49, 92, 117, 0.09)',
      border: `1px solid ${isDark
        ? 'rgba(143, 183, 204, 0.2)'
        : 'rgba(49, 92, 117, 0.12)'}`,
      borderRadius: '50%',
      '& svg': {
        fontSize: 30,
      },
    },
    emptyStateEyebrow: {
      marginBottom: theme.spacing(0.5),
      color: theme.palette.primary.main,
      fontSize: '0.68rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      lineHeight: 1.5,
    },
    emptyStateTitle: {
      marginBottom: theme.spacing(1),
      fontSize: '1.25rem',
      fontWeight: 650,
    },
    emptyStateCopy: {
      maxWidth: 430,
      lineHeight: 1.65,
    },
    boutHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 42,
      gap: theme.spacing(2),
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    boutNumber: {
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
    boutName: {
      overflow: 'hidden',
      textAlign: 'right',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    avatarSection: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(3, 0),
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
        padding: theme.spacing(2, 0),
        textAlign: 'center',
      },
    },
    avatarSectionRight: {
      flexDirection: 'row-reverse',
      textAlign: 'right',
      '& $fighterinfo': {
        marginRight: theme.spacing(1.5),
        marginLeft: 0,
      },
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'row',
        textAlign: 'center',
        '& $fighterinfo': {
          marginRight: 0,
          marginLeft: theme.spacing(1.5),
        },
      },
    },
    avatar: {
      width: 48,
      height: 48,
      color: theme.palette.primary.main,
      backgroundColor: isDark
        ? 'rgba(143, 183, 204, 0.12)'
        : theme.palette.primary.light,
    },
    fighterinfo: {
      minWidth: 0,
      marginLeft: theme.spacing(1.5),
    },
    fighterName: {
      fontSize: '1.05rem',
      overflowWrap: 'anywhere',
    },
    fighterRecord: {
      color: theme.palette.text.secondary,
    },
    vsText: {
      display: 'grid',
      width: 36,
      height: 36,
      placeItems: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: isDark ? '#11181C' : '#F5F7F8',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: '50%',
      fontSize: '0.75rem',
      fontWeight: 600,
    },
    cardLeft: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
      [theme.breakpoints.down('xs')]: {
        alignItems: 'center',
      },
    },
    cardMiddle: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0.25, 0),
      },
    },
    cardRight: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-end',
      [theme.breakpoints.down('xs')]: {
        alignItems: 'center',
      },
    },
    paperWrapper: {
      margin: '0 auto',
    },
  };
});

export default styles;
