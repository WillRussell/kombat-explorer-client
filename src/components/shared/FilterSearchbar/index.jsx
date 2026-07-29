import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import { withTheme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './styles';

function FilterSearchbar({
  setInput, disabled, value,
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setInput(event.target.value.toString().toLowerCase());
  };

  return (
    <div className={classes.searchContainer}>
      <InputBase
        className={classes.input}
        color="secondary"
        disabled={disabled}
        endAdornment={value && (
          <InputAdornment position="end">
            <IconButton
              aria-label="Clear event search"
              className={classes.clearButton}
              disabled={disabled}
              onClick={() => setInput('')}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </InputAdornment>
        )}
        fullWidth
        inputProps={{ 'aria-label': 'Search events' }}
        onChange={handleChange}
        placeholder="Search events"
        startAdornment={(
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )}
        value={value}
      />
    </div>
  );
}

FilterSearchbar.propTypes = {
  setInput: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default withTheme(FilterSearchbar);
