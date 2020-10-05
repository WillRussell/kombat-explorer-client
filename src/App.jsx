import Root from 'components/Root';
import ThemeContextProvider from 'context/ThemeContext';
import React from 'react';

function App() {
  return (
    <ThemeContextProvider>
      <Root />
    </ThemeContextProvider>
  );
}

export default App;
