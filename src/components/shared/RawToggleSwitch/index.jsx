import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import { withTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './styles';

function RawToggleSwitch({ isRaw, setIsRaw, disabled }) {
  const classes = useStyles();

  return (
    <FormControl
      className={classes.root}
      component="fieldset"
      disabled={disabled}
    >
      <FormGroup>
        <FormControlLabel
          value="start"
          control={<Switch checked={isRaw} onChange={() => setIsRaw(!isRaw)} />}
          label={isRaw ? 'Raw' : 'Visual'}
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  );
}

RawToggleSwitch.propTypes = {
  isRaw: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  setIsRaw: PropTypes.func.isRequired,
};

export default withTheme(RawToggleSwitch);
