import React from 'react';
import { NavLink } from 'react-router-dom';

const RouterLink = (destination) => React.forwardRef((props, ref) => (
  <NavLink
    innerRef={ref}
    to={destination}
    replace
    {...props}
  />
));

export default RouterLink;
