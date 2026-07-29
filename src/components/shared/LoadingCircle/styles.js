import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  '@keyframes pulse': {
    '0%': {
      opacity: 0.45,
    },
    '50%': {
      opacity: 0.85,
    },
    '100%': {
      opacity: 0.45,
    },
  },
  container: {
    display: 'flex',
    width: '100%',
    maxWidth: 1232,
    minHeight: 260,
    margin: '0 auto',
    padding: theme.spacing(3),
    flexDirection: 'column',
    justifyContent: 'center',
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.25),
    marginBottom: theme.spacing(2),
  },
  skeletonGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  skeletonCard: {
    display: 'flex',
    minHeight: 160,
    padding: theme.spacing(3),
    flexDirection: 'column',
    gap: theme.spacing(1.5),
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 12,
  },
  skeletonLine: {
    display: 'block',
    width: '78%',
    height: 10,
    backgroundColor: theme.palette.type === 'dark' ? '#28343A' : '#E8EDF0',
    borderRadius: 999,
    animation: '$pulse 1.5s ease-in-out infinite',
  },
  skeletonLineShort: {
    width: '24%',
    height: 8,
  },
  skeletonLineTitle: {
    width: '58%',
    height: 18,
    marginBottom: theme.spacing(1),
  },
  skeletonLineMedium: {
    width: '48%',
  },
}));

export default styles;
