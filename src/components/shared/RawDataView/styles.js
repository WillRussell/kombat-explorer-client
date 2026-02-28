import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  const isDark = theme.palette.type === 'dark';
  return {
    paper: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      backgroundColor: isDark ? '#111111' : theme.palette.background.paper,
      border: `1px solid ${isDark ? '#2A2A2A' : theme.palette.divider}`,
    },
    preformat: {
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      overflow: 'hidden',
      fontFamily: '"Roboto Mono", "Courier New", monospace',
      fontSize: '0.85rem',
    },
  };
});

export default styles;
