import {
  blue, lightBlue, red, teal,
} from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: teal,
    secondary: lightBlue,
    error: {
      main: red[400],
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: teal,
    secondary: blue,
    error: {
      main: red[400],
    },
  },
});
