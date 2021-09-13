import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<Router><App /></Router>);
  const linkElement = getByText(/kombat explorer/i);
  expect(linkElement).toBeInTheDocument();
});
