import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

export const ThemeContext = React.createContext();

const ThemeContextProvider = ({ children }) => {
  const prevThemeState = localStorage.getItem('isThemeLight') || true;
  const [isThemeLight, setIsThemeLight] = useState(JSON.parse(prevThemeState));

  const toggleTheme = () => {
    setIsThemeLight(!isThemeLight);
  };

  useEffect(() => {
    localStorage.setItem('isThemeLight', isThemeLight);
  }, [isThemeLight]);

  const defaultContext = {
    isThemeLight,
    toggleTheme,
  };

  return <ThemeContext.Provider value={defaultContext}>{children}</ThemeContext.Provider>;
};

ThemeContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeContextProvider;
