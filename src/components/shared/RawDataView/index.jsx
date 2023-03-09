import Paper from '@material-ui/core/Paper';
import { withTheme } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './styles';

// eslint-disable-next-line react/prop-types
function RawDataView({ data }) {
  const classes = useStyles();

  return (
    <Paper
      className={classes.paper}
      elevation={3}
      square
    >
      <pre className={classes.preformat}>
        { JSON.stringify(data, null, 2) }
      </pre>
    </Paper>
  );
}

// RawDataView.propTypes = {
//   data: PropTypes.oneOfType([
//     PropTypes.shape({}),
//     PropTypes.shape([]),
//   ]).isRequired,
// };

export default withTheme(RawDataView);
