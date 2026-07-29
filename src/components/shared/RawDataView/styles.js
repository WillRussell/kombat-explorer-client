import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  const isDark = theme.palette.type === 'dark';
  return {
    paper: {
      padding: theme.spacing(2.5),
      color: theme.palette.text.secondary,
      backgroundColor: isDark ? '#11181C' : '#F8FAFB',
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
    },
    preformat: {
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      overflow: 'hidden',
      fontFamily: '"Roboto Mono", "Courier New", monospace',
      fontSize: '0.8rem',
      lineHeight: 1.65,
    },
  };
});

export default styles;
