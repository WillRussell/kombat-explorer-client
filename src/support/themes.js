import { createTheme } from '@material-ui/core/styles';

const typography = {
  fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  h4: {
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: '-0.035em',
    lineHeight: 1.15,
  },
  h5: {
    fontSize: '1.15rem',
    fontWeight: 600,
    letterSpacing: '-0.015em',
    lineHeight: 1.35,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '-0.01em',
  },
  button: {
    fontWeight: 600,
    letterSpacing: 0,
    textTransform: 'none',
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '0.02em',
  },
};

const sharedOverrides = {
  MuiAppBar: {
    colorPrimary: {
      backgroundColor: 'transparent',
    },
  },
  MuiButton: {
    root: {
      borderRadius: 8,
      minHeight: 40,
      padding: '7px 14px',
      textTransform: 'none',
    },
    outlined: {
      borderColor: 'currentColor',
    },
  },
  MuiIconButton: {
    root: {
      borderRadius: 8,
    },
  },
  MuiPaper: {
    rounded: {
      borderRadius: 12,
    },
  },
  MuiTooltip: {
    tooltip: {
      borderRadius: 6,
      fontSize: '0.75rem',
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#315C75',
      light: '#E9F1F5',
      dark: '#244658',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#315C75',
      light: '#E9F1F5',
      dark: '#244658',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#B54747',
    },
    warning: {
      main: '#8A6A2F',
    },
    background: {
      default: '#F5F7F8',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#17242C',
      secondary: '#66757E',
    },
    divider: '#E3E8EB',
  },
  shape: {
    borderRadius: 12,
  },
  typography,
  overrides: {
    ...sharedOverrides,
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#F5F7F8',
        },
        '::selection': {
          color: '#17242C',
          backgroundColor: '#CADDE7',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            scrollBehavior: 'auto !important',
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
          },
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#8FB7CC',
      light: '#263C48',
      dark: '#B9D3E0',
      contrastText: '#10212A',
    },
    secondary: {
      main: '#8FB7CC',
      light: '#263C48',
      dark: '#B9D3E0',
      contrastText: '#10212A',
    },
    error: {
      main: '#DF7777',
    },
    warning: {
      main: '#C8AD75',
    },
    background: {
      default: '#101518',
      paper: '#182025',
    },
    text: {
      primary: '#EDF2F4',
      secondary: '#9DABB2',
    },
    divider: '#2A343A',
  },
  shape: {
    borderRadius: 12,
  },
  typography,
  overrides: {
    ...sharedOverrides,
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#101518',
        },
        '::selection': {
          color: '#10212A',
          backgroundColor: '#8FB7CC',
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            scrollBehavior: 'auto !important',
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
          },
        },
      },
    },
  },
});
