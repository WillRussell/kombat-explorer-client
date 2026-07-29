import InputAdornment from '@material-ui/core/InputAdornment';
import InputBase from '@material-ui/core/InputBase';
import { withTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './styles';

function FilterSearchbar({ setInput, disabled }) {
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
        fullWidth
        inputProps={{ 'aria-label': 'Search events' }}
        onChange={handleChange}
        placeholder="Search events"
        startAdornment={(
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )}
      />
    </div>
  );
}

FilterSearchbar.propTypes = {
  setInput: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default withTheme(FilterSearchbar);
