import {
  blue, lightBlue, red, teal,
} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: teal,
    secondary: lightBlue,
    error: {
      main: red[400],
    },
  },
});

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: teal,
    secondary: blue,
    error: {
      main: red[400],
    },
  },
});
