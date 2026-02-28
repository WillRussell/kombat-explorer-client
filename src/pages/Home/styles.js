import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
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
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  titleActions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
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
    transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: theme.shadows[12],
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
  cardActions: {
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));

export default styles;
