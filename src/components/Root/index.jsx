import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Layout from 'components/Layout';
import { ThemeContext } from 'context/ThemeContext';
import React, { useContext } from 'react';
import { darkTheme, lightTheme } from 'support/themes';

import useStyles from './styles';

function Root() {
  const classes = useStyles();
  const { isThemeLight } = useContext(ThemeContext);
  const activeTheme = isThemeLight ? lightTheme : darkTheme;

  return (
    <MuiThemeProvider theme={activeTheme}>
      <>
        <CssBaseline />
        <div className={classes.container}>
          <Layout />
        </div>
      </>
    </MuiThemeProvider>
  );
}

export default Root;
