import IconButton from '@material-ui/core/IconButton';
import { withTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { ThemeContext } from 'context/ThemeContext';
import React, { useContext } from 'react';

import useStyles from './styles';

function ThemeToggle() {
  const classes = useStyles();
  const { toggleTheme, isThemeLight } = useContext(ThemeContext);

  return (
    <div className={classes.container}>
      <Tooltip title={isThemeLight ? 'Use dark theme' : 'Use light theme'} placement="bottom">
        <IconButton
          aria-label={isThemeLight ? 'Use dark theme' : 'Use light theme'}
          className={classes.button}
          onClick={toggleTheme}
        >
          {isThemeLight ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Tooltip>
    </div>
  );
}

export default withTheme(ThemeToggle);
