import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  buffer: {
    ...theme.mixins.toolbar,
  },
}));

export default styles;
