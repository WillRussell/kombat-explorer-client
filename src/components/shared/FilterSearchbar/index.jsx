import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
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
    <Container className={classes.searchContainer} maxWidth="lg">
      <Input
        color="secondary"
        disabled={disabled}
        onChange={handleChange}
        placeholder="Search"
        startAdornment={(
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )}
      />
    </Container>
  );
}

FilterSearchbar.propTypes = {
  setInput: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default withTheme(FilterSearchbar);
